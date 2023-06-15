import { FC } from 'react';
import styles from '@/styles/components/users.module.scss';
import { operations } from '@/constants';
const {
  operationType,
  operationSection,
  operationItem1,
  operationItem2,
  operationName,
  operationButton,
  operationStatus,
} = styles;
// const operationID: string = '0';

export const Operation: FC = () => {
  //   const operationItems = operations.filter((operation) => {
  //     operation.ID !== null && operation.section !== undefined;
  //   });
  const operationList = operations.map((operation) => (
    <section
      className={
        operation.colorOption == 'colors1' ? operationItem1 : operationItem2 // && operationType
      }
    >
      <p className={operationName}>{operation.name}</p>
      {operation.isInteractive ? (
        <button className={operationButton}>{operation.action}</button>
      ) : (
        <p className={operationStatus}>
          {operation.action}
          <br></br>
          <br></br>
          {operation.status}
        </p>
      )}
    </section>
  ));
  return (
    <>
      <main className={operationSection}>{operationList}</main>
    </>
  );
};
