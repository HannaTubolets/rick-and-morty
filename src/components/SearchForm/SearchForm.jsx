import { useState } from 'react';
import searchIcon from '../../images/search-icon.svg';
import css from './SearchForm.module.css';

export const SearchForm = props => {
  const [search, setSearch] = useState('');

  const handleSearch = event => {
    setSearch(event.target.value);
    props.handleFilter({
      value: event.target.value,
      key: event.target.id,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <div className={css.InputWrapper}>
          <button className={css.searchFormBtn} type="submit">
            <img src={searchIcon} alt="search" />
          </button>
          <input
            className={css.searchFormInput}
            onChange={handleSearch}
            type="text"
            value={search}
            name="searchBox"
            id="searchBox"
            placeholder="Filter by name"
            autoFocus
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;
