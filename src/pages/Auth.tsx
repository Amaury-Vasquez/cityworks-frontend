import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { LoginForm } from '@/components';
import styles from '@/styles/pages/auth.module.scss';

const Auth: FC = () => {
  return (
    <>
      <Helmet>
        <title>Cityworks - Autenticación de usuario</title>
        <meta
          name="description"
          content="CityWorks, pagina de autenticación de usuario"
        />
      </Helmet>
      <main className={styles.authContent}>
        <LoginForm />
      </main>
    </>
  );
};

export default Auth;
