// import PropTypes from 'prop-types';
import CharacterItemCard from 'components/CharacterItemCard/CharacterItemCard';
import css from 'components/CharacterCardList/CharacterCardList';

export const CharacterCardList = ({ character }) => {
  console.log(character);
  return (
    <ul className={css.CharacterGallery}>
      {character.map(({ id, name, species, image }) => (
        <CharacterItemCard
          key={id}
          id={id}
          name={name}
          species={species}
          image={image}
        />
      ))}
    </ul>
  );
};

// MovieCardList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       poster_path: PropTypes.string.isRequired,
//       release_date: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default CharacterCardList;
