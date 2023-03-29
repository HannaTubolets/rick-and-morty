import axios from 'axios';

// const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  console.log(response.data.results); // add this line
  return response.data.results;
}

// console.log(getAllCharacters());
