import { FC } from 'react';
import { LoginForm } from '@/components';
import styles from '@/styles/pages/auth.module.scss';

const Auth: FC = () => {
  return (
    <main className={styles.authContent}>
      <LoginForm />
    </main>
  );
};

export default Auth;
