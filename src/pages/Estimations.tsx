import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { nameProject } from '@/constants/index.ts';
import { Operation } from '@/components/Operations';
import { AsideUserProfile } from '@/components/UserProfile';
import styles from '@/styles/pages/estimations.module.scss';

const { estimationsContent } = styles;
const Estimations: FC = () => {
  return (
    <>
      <Helmet>
        <title>{nameProject} - Bienvenido a la sección de estimaciones.</title>
        <meta
          name="description"
          content={
            nameProject +
            ', página especializada para operaciones sobre estimaciones por el Superintendente.'
          }
          //{nameProject} + "pagina especializada para residentes de obra."
        />
      </Helmet>
      <main className={estimationsContent}>
        <AsideUserProfile userName='Residente'/>
        <Operation userType="Residente" />
      </main>
    </>
  );
};

export default Estimations;
