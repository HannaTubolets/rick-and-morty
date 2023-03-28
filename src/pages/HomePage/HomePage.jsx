import { useEffect, useState } from 'react';
import { getAllCharacters } from 'serveses/Api';
import CharacterCardList from 'components/CharacterCardList/CharacterCardList';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './HomePage.module.css';

export default function HomePage() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    getAllCharacters().then(data => {
      setCharacter(data.results);
      console.log(data);
    });
  }, []);

  return (
    <main className={css.Section}>
      <div>
        <h1>Hello</h1>
        <SearchForm />
        <CharacterCardList characters={character} />
      </div>
    </main>
  );
}
