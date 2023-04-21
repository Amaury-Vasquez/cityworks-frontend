import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Image } from '@/components';
import styles from '@/styles/pages/home.module.scss';

const { homeContent, homeTitle, homeText, homeArticle, homeButton, homeImage } =
  styles;

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>CityWorks - Bienvenido nuevamente</title>
        <meta name="description" content="CityWorks homepage" />
      </Helmet>
      <main className={homeContent}>
        <article className={homeArticle}>
          <h1 className={homeTitle}>¡Bienvenido nuevamente!</h1>
          <p className={homeText}>
            Inicia sesión dando click en el siguiente botón para empezar a
            disfrutar nuestros servicios.
          </p>
          <a className={homeButton} href="/login">
            Iniciar sesión
          </a>
        </article>
        <div className={homeImage}>
          <Image
            src="https://i.imgur.com/9PKFEAU.jpg"
            alt="Parque los Venados"
            caption='Foto de "Parque los Venados" por "Jorge L". Obra pública en CDMX'
          />
        </div>
      </main>
    </>
  );
};
