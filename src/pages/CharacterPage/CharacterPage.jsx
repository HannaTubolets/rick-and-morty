import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { getCharacterDetails } from 'serveses/Api';
import { Loader } from '../../components/Loader/Loader';
import css from './CharacterPage.module.css';

export default function CharacterPage() {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let { id } = useParams();

  const location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  useEffect(() => {
    if (id) {
      const oneCharacter = async () => {
        setIsLoading(true);
        try {
          const data = await getCharacterDetails(id);
          console.log(data); //shown character
          setCharacters(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      oneCharacter();
    }
  }, [id]);

  // console.log(characters);

  const { name } = characters;

  return (
    <>
      <main className={css.Container}>
        <NavLink to={locationFrom} className={css.BackBtn}>
          ⬅️ GO BACK
        </NavLink>
        {isLoading && <Loader />}
        {!error && (
          <div className={css.Section}>
            <img
              className={css.CharacterImg}
              src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
              alt={name}
              width={'240px'}
            />

            <div className={css.TxtWrapper}>
              <h1 className={css.CharacterName}>{characters.name}</h1>
              <h2 className={css.Info}>Informations</h2>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Gender</h3>
                <p className={css.TxtInfo}>{characters.gender}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Status</h3>
                <p className={css.TxtInfo}>{characters.status}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Species </h3>
                <p>{characters.species}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Origin</h3>
                <p className={css.TxtInfo}>{characters.origin?.name}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Type</h3>
                {characters.type ? (
                  <p className={css.TxtInfo}>{characters.type}</p>
                ) : (
                  <p className={css.TxtInfo}>No info</p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Outlet />
    </>
  );
}
