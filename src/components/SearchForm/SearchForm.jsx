import searchIcon from '../../images/search-icon.svg';
import css from './SearchForm.module.css';

export const SearchForm = () => {
  return (
    <>
      <form
        className={css.searchForm}
        //   onSubmit={handleSubmit}
      >
        <button className={css.searchFormBtn} type="submit">
          <img src={searchIcon} alt="search" />
        </button>
        <input
          className={css.searchFormInput}
          //   onChange={handleSearch}
          //   value={search}
          placeholder="Filter by name"
        />
      </form>
    </>
  );
};

export default SearchForm;
