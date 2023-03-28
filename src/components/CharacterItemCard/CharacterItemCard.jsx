// import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import css from 'components/CharacterItemCard/CharacterItemCard';

export const CharacterItemCard = ({ id, name, species, image }) => {
  const location = useLocation();

  return (
    <li key={id} className={css.CharacterGalleryItem}>
      <NavLink
        to={`/character/${id}`}
        state={{ from: location }}
        className={css.NavLink}
      >
        <img
          className={css.CharacterGalleryItemImage}
          src={image}
          alt={name}
          min-width={'100px'}
        />
        <div>
          <h2 className={css.CharacterName}>{name}</h2>
          <p>{species}</p>
        </div>
      </NavLink>
    </li>
  );
};

// MovieItemCard.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string,
//   overview: PropTypes.string,
//   release_date: PropTypes.string,
//   vote_average: PropTypes.number,
//   genres: PropTypes.string,
// };

export default CharacterItemCard;
