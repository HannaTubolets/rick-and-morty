import { React } from 'react';
import logoImg from 'images/logo.png';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.Header}>
        <div className={css.LogoWrapper}>
          <img className={css.Logo} src={logoImg} alt="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
