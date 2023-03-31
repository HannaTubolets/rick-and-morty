import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { getCharacterDetails } from 'serveses/Api';
import { Loader } from '../../components/Loader/Loader';
import css from './CharacterPage.module.css';

export default function CharacterPage() {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let { charactersId } = useParams();

  const location = useLocation();
  const locationFrom = location?.state?.from ?? '/';

  useEffect(() => {
    // const oneCharacter = async () => {
    //   setIsLoading(true);
    //   try {
    //     await getCharacterDetails(charactersId).then(data => {
    //       setCharacters(data);
    //       console.log(data);
    //     });
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
    // oneCharacter();

    if (charactersId) {
      const oneCharacter = async () => {
        setIsLoading(true);
        try {
          const data = await getCharacterDetails(charactersId);
          console.log(data);
          setCharacters(data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      oneCharacter();
    }
  }, [charactersId]);

  console.log(characters);

  const { gender, name, status, species, origin, type, id } = characters;

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
              <h1 className={css.CharacterName}>{name}</h1>
              <h2 className={css.Info}>Informations</h2>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Gender</h3>
                <p className={css.TxtInfo}> {gender}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Status</h3>
                <p className={css.TxtInfo}>{status}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Species </h3>
                <p>{species}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Origin</h3>
                <p className={css.TxtInfo}>{origin}</p>
              </div>
              <div className={css.Wrapper}>
                <h3 className={css.TxtOptions}>Type</h3>
                <p className={css.TxtInfo}>{type}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Outlet />
    </>
  );
}
