import { FC } from 'react';
import { columns } from '@/constants';
import styles from '@/styles/pages/guess.module.scss';

const { columnTitle, columnText, columnSection } = styles;
export const Columns: FC = () => {
  const columnTitles = columns.map((column) => (
    <section className={columnTitle}>
      <h1 className={columnText}>{column.value}</h1>
    </section>
  ));
  return (
    <>
      <main className={columnSection}>{columnTitles}</main>
    </>
  );
};
