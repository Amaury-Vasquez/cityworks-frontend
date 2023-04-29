import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Image } from '@/components';
import styles from '@/styles/pages/home.module.scss';

const { homeContent, homeTitle, homeText, homeArticle, homeButton, homeImage } =
  styles;

const Home: FC = () => {
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
            CityWorks es un servicio que se encarga de la administración y
            gestión de obras públicas en la república Mexicana.
          </p>
          <a className={homeButton} href="/login" tabIndex={-1}>
            <Button large withShadow variant="gray">
              Iniciar sesión
            </Button>
          </a>
        </article>
        <div className={homeImage}>
          <Image
            src="https://i.imgur.com/9PKFEAU.jpg"
            alt="Parque los Venados"
            caption="Parque los Venados. Obra pública en CDMX"
            shadow
            padding
          />
        </div>
      </main>
    </>
  );
};

export default Home;
