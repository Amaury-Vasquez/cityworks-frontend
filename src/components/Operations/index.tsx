import { FC } from 'react';
import styles from '@/styles/components/operations.module.scss';
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

export const OperationsSection: FC = () => {
  //   const operationItems = operations.filter((operation) => {
  //     operation.ID !== null && operation.section !== undefined;
  //   });
  const operationList = operations.map((operation, i) => (
    <section
      className={
        operation.colorOption == 'colors1' ? operationItem1 : operationItem2 // && operationType
      }
      key={operation.entity + operation.ID + i}
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
  return <div className={operationSection}>{operationList}</div>;
};
