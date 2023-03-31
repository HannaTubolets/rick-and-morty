import { React } from 'react';
import logoImg from 'images/logo.png';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.Header}>
        <div className={css.LogoWrapper}>
          <a href="/">
            <img className={css.Logo} src={logoImg} alt="logo" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
