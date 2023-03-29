import { useEffect, useState } from 'react';
import { getAllCharacters } from 'serveses/Api';
import CharacterCardList from 'components/CharacterCardList/CharacterCardList';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './HomePage.module.css';

export function HomePage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAllCharacters().then(data => {
      setCharacters(data);
    });
  }, []);

  return (
    <main className={css.Section}>
      <div>
        <SearchForm />
        {characters.length > 0 && <CharacterCardList characters={characters} />}
      </div>
    </main>
  );
}

export default HomePage;
