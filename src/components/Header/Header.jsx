import { React } from 'react';
import logoImg from 'images/logo.png';
import css from 'components/Header/Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.Header}>
        <div>
          <img src={logoImg} alt="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
