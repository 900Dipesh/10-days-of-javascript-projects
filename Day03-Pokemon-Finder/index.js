function fetchPokemon() {
    const name = document.getElementById("pokemonInput").value.trim().toLowerCase();
    const pokeImage = document.getElementById("pokemonImage");
    const pokemonName = document.getElementById("pokemonName");
    const pokemonType = document.getElementById("pokemonType");
    const pokemonStats = document.getElementById("pokemonStats");

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data); //Full Pokémon data
            //Pokemon Name
            pokemonName.innerText = `Name: ${data.name.toUpperCase()}`;

            //Pokemon Image
            pokeImage.src = data.sprites.front_default;
            pokeImage.style.display = "block";

            //Pokemon Type
            const typesArray = data.types.map(t => t.type.name);
            const typeText = typesArray.join(", ");
            pokemonType.innerText = `Type: ${typeText}`;

            //Pokemon stats
            const statTextArray = data.stats.map(stat => {
                return `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
            });
            const statsText = statTextArray.join("\n");
            pokemonStats.innerText = `Stats: \n ${statsText}`; 
        })
        .catch(error => {
            alert(error.message);
        });
}
