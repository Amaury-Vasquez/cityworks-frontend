import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '@/components';
import styles from '@/styles/pages/auth.module.scss';

const Register: FC = () => {
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
        <RegisterForm />
      </main>
    </>
  );
};

export default Register;
