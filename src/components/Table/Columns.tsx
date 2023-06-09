import { FC } from 'react';
import { columns } from '@/constants';
import styles from '@/styles/components/columns.module.scss';

const { columnTitle, columnText, columnSection } = styles;
export const Columns: FC = () => {
  const columnTitles = columns.map((column, key) => (
    <section className={columnTitle}>
      <h1 className={columnText}>{column.value}</h1>
    </section>
  ));
  return <div className={columnSection}>{columnTitles}</div>;
};