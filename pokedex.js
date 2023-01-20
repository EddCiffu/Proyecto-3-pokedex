function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data);
        });
}

async function getPokemons(numero){
    for (var i = 1; i <= numero; i++) {
        let id_pokemon = Math.floor(Math.random() * 800);
        fetchPokemon(id_pokemon);
    }
}

function crearPokemon(pokemon){
    let url_sprite = pokemon.sprites.front_default;
    let nombre = pokemon.name;

    let box = document.getElementById("box");
    let card = document.createElement('div');
    card.className = 'card'
    
    let imgBox = document.createElement('div')
    imgBox.className = 'imgBox'
    imgBox.appendChild(document.createElement('IMG')).setAttribute('src',url_sprite);


    let details = document.createElement('div');
    details.className = 'details'
    let h2 = document.createElement('h2');
    h2.innerHTML = nombre;
    details.appendChild(h2);

    card.appendChild(imgBox);
    card.appendChild(details)

    box.appendChild(card)
    
}

(function(){
    getPokemons(6)
}())

