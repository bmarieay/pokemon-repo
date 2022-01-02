// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container  = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i=1; i <= 160; i++){
    const pokemon = document.createElement('div');
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;

    const pokemonNumber = document.createElement('span');
    pokemonNumber.append(`#${i}`);

    pokemon.classList.add('pokemon');
    pokemonNumber.classList.add('center');

    pokemon.appendChild(newImg);
    pokemon.appendChild(pokemonNumber);
    container.appendChild(pokemon);
}


//model:
/* <div>
    <img></img>
    <span>#</span>
</div> */