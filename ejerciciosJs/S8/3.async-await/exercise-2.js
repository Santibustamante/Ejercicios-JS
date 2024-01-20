async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await res.json()
    console.log(characters);
}

const getCharacters2 = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const characters = await res.json()
    console.log(characters);
}

getCharacters();

getCharacters2();