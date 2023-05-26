import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { nameProject } from '@/constants/index.ts';
import { OperationsSection } from '@/components/Operations';
import { UserProfile } from '@/components/UserProfile';
import styles from '@/styles/pages/users.module.scss';

const { userContent } = styles;

const Users: FC = () => {
  return (
    <>
      <Helmet>
        <title>{nameProject} - Bienvenido, residente</title>
        <meta
          name="description"
          content={
            nameProject + ', página especializada para residentes de obra.'
          }
          //{nameProject} + "pagina especializada para residentes de obra."
        />
      </Helmet>
      <main className={userContent}>
        <UserProfile />
        <OperationsSection />
      </main>
    </>
  );
};

export default Users;
