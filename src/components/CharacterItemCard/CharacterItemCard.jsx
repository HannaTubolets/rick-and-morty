import { NavLink, useLocation } from 'react-router-dom';
import css from 'components/CharacterItemCard/CharacterItemCard';

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
          min-width={'100px'}
        />
        <div>
          <h2 className={css.CharacterName}>{name}</h2>
          <p className={css.CharacterName}>{species}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default CharacterItemCard;
