import { NavLink, useLocation } from 'react-router-dom';
import css from './CharacterItemCard.module.css';

const CharacterItemCard = ({ id, name, species, image }) => {
  const location = useLocation();

  return (
    <li key={id} className={css.CharacterGalleryItem}>
      <NavLink
        to={`/character/${id}`}
        state={{ from: location }}
        className={css.NavLink}
      >
        <img
          className={css.CharacterItemImage}
          src={image}
          alt={name}
          max-width={'240px'}
        />
        <div className={css.TxtWrapper}>
          <h2 className={css.CharacterName}>{name}</h2>
          <p className={css.CharacterSpecies}>{species}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default CharacterItemCard;
