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

  const filteredCharacters = characters.filter(character => {
    return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  });

  return (
    <main className={css.Section}>
      <div>
        <SearchForm handleFilter={handleFilter} />
        {filteredCharacters.length > 0 && (
          <CharacterCardList characters={filteredCharacters} />
        )}
      </div>
    </main>
  );
}

export default HomePage;
