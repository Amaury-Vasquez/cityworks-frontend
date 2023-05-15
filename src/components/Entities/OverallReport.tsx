import { FC } from 'react';
import { nameProject } from '@/variables/index.ts';
import styles from '@/styles/components/entities.module.scss';

const {
    report,
    reportTitle
} = styles;

export const OverallReport: FC = () =>{
    return(
        <>
            <form action="#" method="post" className={report}>
                <h1 className={reportTitle}>Reporte global</h1>
                <h2>
                    Del periodo <strong>MM-DD - MM-DD</strong>,
                    del año AAAA.
                </h2>
                <fieldset>
                    <legend>Actividades realizadas</legend> 
                </fieldset>
            </form>
        </>
    );
}