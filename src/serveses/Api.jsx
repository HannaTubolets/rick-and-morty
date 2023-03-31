import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  const response = await axios.get(`${BASE_URL}/character`);
  // console.log(response.data.results); // add this line
  return response.data.results;
}

export async function getCharacterDetails(id) {
  const response = await axios.get(`${BASE_URL}/character/${id}`);
  // console.log(response.data); // add this line to check the data
  return response.data;
}

getCharacterDetails(1).then(data => console.log(data));
