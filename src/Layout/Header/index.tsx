import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from '@/styles/layout/header.module.scss';

const { header, homeLink, nav, navLink, loginButton } = styles;

export const Header: FC = () => {
  return (
    <header className={header}>
      <Link to="/" className={homeLink}>
        CityWorks
      </Link>
      <nav className={nav}>
        <Link to="/about" className={navLink}>
          ¿Qué es CityWorks?
        </Link>
        <Link to="/auth" className={loginButton}>
          Iniciar sesión
        </Link>
      </nav>
    </header>
  );
};
