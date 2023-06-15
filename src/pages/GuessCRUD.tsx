import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Columns } from '@/components/Table';
import { nameProject } from '@/constants/index.ts';
import styles from '@/styles/pages/guess.module.scss';

const { guessContent, guessTitle } = styles;
const GuessCRUD: FC = () => {
  return (
    <>
      <Helmet>
        <title>{nameProject} - Estimaciones</title>
        <meta 
          name='estimationsCRUD'
          content={
            nameProject + ', página especializada para estimaciones almacenadas.'
          }     
        />
      </Helmet>
      <main className={guessContent}>
        <h1 className={guessTitle}>Estimaciones</h1>
        <Columns />
      </main>
    </>
  );
};

export default GuessCRUD;
