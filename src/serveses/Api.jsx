import axios from 'axios';

// const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  // console.log(response.data.results); // add this line
  return response.data.results;
}

export async function getCharacterDetails(id) {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.data;
}

getCharacterDetails(1).then(data => console.log(data));
