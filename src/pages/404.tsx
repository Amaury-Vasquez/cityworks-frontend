import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components';
import styles from '@/styles/pages/404.module.scss';

const { notFoundLayout, notFoundText, details } = styles;

const NotFound: FC = () => (
  <>
    <Helmet>
      <title>CityWorks - Página no encontrada</title>
      <meta name="description" content="CityWorks, página no existente" />
    </Helmet>
    <main className={notFoundLayout}>
      <h1 className={notFoundText}>404</h1>
      <p className={details}>
        El error 404 es un código de estado HTTP que indica que el servidor no
        puede encontrar el recurso solicitado por el cliente, generalmente una
        página web. Esto puede deberse a que el enlace o la URL del recurso ha
        sido eliminado, renombrado o movido, o porque nunca existió.
      </p>
      <Link to="/" tabIndex={-1}>
        <Button variant="gray">Volver al inicio</Button>
      </Link>
    </main>
  </>
);

export default NotFound;
