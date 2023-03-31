import { React } from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'images/logo.png';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.Header}>
        <div className={css.LogoWrapper}>
          <Link to="/">
            <img className={css.Logo} src={logoImg} alt="logo" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
