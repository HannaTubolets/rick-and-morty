import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getCharacterDetails(id) {
  const response = await axios.get(`${BASE_URL}/character/${id}`);

  return response.data;
}

export async function getAllCharacters() {
  // const charactersPerPage = 20;
  let allCharacters = [];
  let totalPages = 1;
  let currentPage = 1;

  while (currentPage <= totalPages) {
    const response = await fetch(`${BASE_URL}/character/?page=${currentPage}`);
    const { info, results } = await response.json();
    allCharacters = [...allCharacters, ...results];
    totalPages = info.pages;
    currentPage++;
  }

  return allCharacters;
}

getAllCharacters().then(characters => console.log(characters));
