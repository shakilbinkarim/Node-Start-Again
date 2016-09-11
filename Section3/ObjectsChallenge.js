var pokemon = {
    type: 'Fire',
    name: 'Cyndaquil'
};

function printPokemon (pokemon) {
    console.log('You have a ' + pokemon.name + ', which is a ' + pokemon.type + ' type.');
}

printPokemon(pokemon);