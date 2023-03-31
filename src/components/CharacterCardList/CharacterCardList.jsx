import CharacterItemCard from 'components/CharacterItemCard/CharacterItemCard';
import css from './CharacterCardList.module.css';

const CharacterCardList = ({ characters }) => {
  console.log(characters);
  return (
    <ul className={css.CharacterGallery}>
      {characters.map(({ id, name, species, image }) => (
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

export default CharacterCardList;
