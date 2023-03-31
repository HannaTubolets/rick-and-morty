import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { getCharacterDetails } from 'serveses/Api';
import { Loader } from '../../components/Loader/Loader';
import css from '../CharacterPage/CharacterPage.module.css';

export default function CharacterPage(props) {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let { characterId } = useParams();

  const location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  useEffect(() => {
    if (characterId) {
      const oneCharacter = async () => {
        setIsLoading(true);
        try {
          const data = await getCharacterDetails(characterId);
          console.log(data); // add this line
          setCharacters(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      oneCharacter();
    }
  }, [characterId]);
  console.log(characters);

  const { gender, name, status, specie, id, origin, type } = characters;

  return (
    <>
      <NavLink to={locationFrom} className={css.BackBtn}>
        👈 BACK
      </NavLink>
      {isLoading && <Loader />}
      {error && <h2>Sory, there is nothing 🙁, try again</h2>}
      {!error && (
        <section className={css.Section}>
          <img
            className={css.CharacterImg}
            src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
            alt={name}
            width={'240px'}
          />

          <div className={css.Container}>
            <h1 className={css.CharacterName}>{name}</h1>
            <h2>Informations</h2>
            <h3>
              Gender
              <span className={css.Gender}> {gender}</span>
            </h3>
            <h3>Status</h3>
            <p>{status}</p>
            <h3>Specie </h3>
            {specie ? (
              <p className={css.Txt}>{specie}</p>
            ) : (
              <p className={css.Txt}>No specie</p>
            )}
            <h3>Origin</h3>
            <p>{origin}</p>
            <h3>Type</h3>
            <p>{type}</p>
          </div>
        </section>
      )}

      <Outlet />
    </>
  );
}
