/* 
╔══════════════════════════════════════════════════╗
║                Curso Front-End                   ║
║                   Tarea Nº 7                     ║
╠══════════════════════════════════════════════════╣
║ Alumno: Alfredo López Allende                    ║
║ RUT   : XX.XXX.XXX-3                             ║
║ Fecha Entrega: 24 de junio de 2023               ║
╚══════════════════════════════════════════════════╝
*/
// Almacena la URL del endpoint de la API de Pokemon.
const pokemonEndpoint = 'https://pokeapi.co/api/v2/pokemon/';
// Nombre del contenedor HTML para mostrar los primeros 20 Pokemon como tarjetas.
const pokemonContenedor = document.getElementById('pokemon-contenedor');

// Función que realiza el filtro con los 20 primeros pokemones.
async function buscarPokemones() {
    try {
        // Petición GET a la API para obtener el listado de Pokemon.
        const peticionGet = await axios.get(pokemonEndpoint); 
        // Filtramos los primeros 20 Pokemon del resultado obtenido de la petición GET a la API.
        const pokemones = peticionGet.data.results.slice(0, 20);
        // Ciclo para recorrer los datos filtrados
        for (const pokemon of pokemones) {
            // Ejecuta una petición GET a la URL de cada Pokemon para obtener sus datos.
            const pokemonDatos = await axios.get(pokemon.url);
            // Crea la tarjeta del Pokemon obtenidos y la agrega al contenedor
            CrearTarjetaPokemon(pokemonDatos.data);
        }
    } catch (error) {
        // Manejo de errores frente a un problema en las solicitudes GET HTTP.
        console.error('Se ha generado el siguiente error a la petición GET:', error);
    }
}
// Función que crea las tarjetas de los pokemones de la consulta.
function CrearTarjetaPokemon(pokemon) {
    // Crea un elemento div de la clase pokemon-tarjeta para mostrar el Pokemon en su tarjeta.
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('pokemon-tarjeta'); // Agrega la clase CSS 'pokemon-tarjeta' a la tarjeta
    // Crea un elemento img para la imagen del Pokemon.
    const imagen = document.createElement('img');
    // Agrega un ellemento de la clase 'pokemon-imagen'
    imagen.classList.add('pokemon-imagenn');
    // Asigan la URL de la imagen del Pokemon para el atributo src.
    imagen.src = pokemon.sprites.front_default;
    // Crea un elemento p con el nombre del Pokemon.
    const name = document.createElement('p');
    // Asiga el texto del nombre del Pokemon. 
    name.textContent = pokemon.name;
    // Agrega la imagen a la tarjeta.
    tarjeta.appendChild(imagen);
    // Agrega el nombre a la tarjeta.
    tarjeta.appendChild(name);
    // Agrega la tarjeta de Pokemon al contenedor.
    pokemonContenedor.appendChild(tarjeta);
}

// Llama a la función para obtener y mostrar los Pokemon.
buscarPokemones();