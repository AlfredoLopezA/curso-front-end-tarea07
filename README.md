Entrega 24 de junio de 2023. Este repositorio contiene un archivo html, un archivo de estilos css y 1 archivo javascript para realizar los puntos exigidos en la tarea Nº 7, que son los siguientes:

Consumir el siguiente endpoint https://pokeapi.co/api/v2/pokemon/ y mostrar en el front lo siguiente:
    a) Cards que contengan los 20 primeros pokemones (imagen y nombre del pokemon).
    b) Utilizar Async / Await para trabajar las promesas de forma asíncrona.
    c) Usar Axios o Fetch para realizar la solicitud al endpoint mencionado.
    d) Ocupar Try / Catch para el manejo de errores.

El archivo index.html muestra los resultados en una página web.
El archivo style.css es una hoja de estilos con el formato que tiene index.html
El archivo pokemon.js contiene lo siguiente:
    - La constante pokemonEndpoint con la URL de la API pokemon.
    - La constante pokemonContenedor con el nombre del elemento html que será el contenedor de los resultados.
    - La función buscarPokemones que se encarga de ejecutar la petición GET y luego el filtro con los 20 primeros pokemones.
    - Finalmente, la función CrearTarjetaPokemon que crear cada una de las tarjetas de los pokemones filtrados.

Hecho por: Alfredo López A. 