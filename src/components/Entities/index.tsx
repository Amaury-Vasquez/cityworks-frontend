import { FC } from "react";
import { Main } from "./Main";
import { Operation } from "./Operation";
import styles from '@/styles/components/entities.module.scss';

const {entitySection} = styles;
export const EntityInterface: FC = () => {
    return(
        <>
            <div id={entitySection}>
                <Main />
                <Operation />
            </div>
        </>
    );
}