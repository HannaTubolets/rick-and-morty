import axios from 'axios';
// import PropTypes from 'prop-types';

const BASE_URL = 'https://rickandmortyapi.com/api';

async function fetchCharacter(url = '', config = {}) {
  const { data } = await axios.get(url, config);
  return data;
}

export function getAllCharacters() {
  return fetchCharacter(`${BASE_URL}/character`);
}

// export const getFilmDetails = async movieId => {
//   const { data } = await axios.get(
//     `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
//   );
//   return data;
// };

// export function getCharacter() {
//   return fetchCharacter(`${BASE_URL}/character/${id}`);
// }

// export function getFilteredCharacters() {
//   return fetchCharacter(`${BASE_URL}/character/?name=${name}&status=alive`);
// }

// console.log(getAllCharacters());
