import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Columns } from '@/components/Table/Columns';
import { nameProject } from '@/constants/index.ts';
import styles from '@/styles/pages/estimationscrud.module.scss';

const { estimationsContent, estimationsTitle } = styles;
const EstimationsCRUD: FC = () => {
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
      <main className={estimationsContent}>
        <h1 className={estimationsTitle}>Estimaciones</h1>
        <Columns />
      </main>
    </>
  );
};

export default EstimationsCRUD;
