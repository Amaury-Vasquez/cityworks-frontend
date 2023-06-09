import { FC } from 'react';
import styles from '@/styles/components/users.module.scss';
import { operations } from '@/constants';
import { HtmlProps } from 'react-helmet-async';
const {
  operationSection,
  operationItem1,
  operationItem2,
  operationName,
  operationButton,
  operationStatus,
} = styles;
// const operationID: string = '0';

interface operationProps {
  userType: 'Residente' | 'Supervisor' | 'Superintendente' | 'Director';
}

export const Operation: FC<operationProps> = ({
  userType,
}) => {
  //   const operationItems = operations.filter((operation) => {
  //     operation.ID !== null && operation.section !== undefined;
  //   });
  const operationList = operations.map((operation, key) => (
    <section
      className={
        operation.colorOption == 'colors1' ? operationItem1 : operationItem2 // && operationType
      }
      id={operation.key.toString()}
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
  return <aside className={operationSection}>{operationList}</aside>;
};
