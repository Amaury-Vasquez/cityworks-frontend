import { FC } from "react";
import styles from '@/styles/components/entities.module.scss';
import { operations } from "@/variables";
const {operationSection, operationItem, operationName, operationButton, operationStatus} = styles;
// const operationID: string = '0';

export const Operation: FC = () => {    
    const operationItems = operations.filter(operation =>
        operation.ID !== null
    );
    const operationList = operationItems.map(operation =>
        <section className={operationItem}>
            <p className={operationName}>{operation.name}</p>            
            {operation.isInteractive?
                <button className={operationButton}>{operation.action}</button> :
                <p className={operationStatus}>{operation.status}</p>
            }
        </section>
    );   
    return(
        <>
            <main>
                <div className={operationSection}>
                    {operationList}
                </div>

            </main>
        </>
    );
}