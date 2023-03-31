import { useEffect, useState } from 'react';
import { getAllCharacters } from 'serveses/Api';
import CharacterCardList from 'components/CharacterCardList/CharacterCardList';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './HomePage.module.css';

export function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const handleFilter = filterData => {
    if (filterData.key === 'searchBox') setNameFilter(filterData.value);
  };

  useEffect(() => {
    getAllCharacters().then(data => {
      setCharacters(data);
    });
  }, []);

  characters.sort(function (a, b) {
    const charA = a.name.toUpperCase();
    const charB = b.name.toUpperCase();
    if (charA < charB) {
      return -1;
    }
    if (charA > charB) {
      return 1;
    }
    return 0;
  });

  const filteredCharacters = characters.filter(character => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <main className={css.Section}>
      <div className={css.Container}>
        <SearchForm handleFilter={handleFilter} />
        {filteredCharacters.length > 0 && (
          <CharacterCardList characters={filteredCharacters} />
        )}
      </div>
    </main>
  );
}

export default HomePage;
