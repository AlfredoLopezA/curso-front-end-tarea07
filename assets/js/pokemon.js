const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonContainer = document.getElementById('pokemon-container');

async function fetchPokemons() {
  try {
    const response = await axios.get(pokemonEndpoint);

    const pokemons = response.data.results.slice(0, 20);

    for (const pokemon of pokemons) {
      const pokemonData = await axios.get(pokemon.url);
      createPokemonCard(pokemonData.data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function createPokemonCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');

  const image = document.createElement('img');
  image.classList.add('pokemon-image');
  image.src = pokemon.sprites.front_default;

  const name = document.createElement('p');
  name.textContent = pokemon.name;

  card.appendChild(image);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}

fetchPokemons();