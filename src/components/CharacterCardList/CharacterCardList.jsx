import { useState } from 'react';
import Pagination from 'components/Pagination/Pagination';
import CharacterItemCard from 'components/CharacterItemCard/CharacterItemCard';
import css from './CharacterCardList.module.css';

const CharacterCardList = ({ characters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = characters.length;

  const handlePaginationChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ul className={css.CharacterGallery}>
        {currentItems.map(({ id, name, species, image }) => (
          <CharacterItemCard
            key={id}
            id={id}
            name={name}
            species={species}
            image={image}
          />
        ))}
      </ul>

      <div className={css.Pagination}>
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={handlePaginationChange}
        />
      </div>
    </>
  );
};

export default CharacterCardList;
