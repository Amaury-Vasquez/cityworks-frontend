import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { nameProject } from '@/variables/index.ts';
import { EntityInterface } from '@/components/Entities';
import { OverallReport } from '@/components/Entities/OverallReport';
import styles from '@/styles/components/entities.module.scss'

const { reportTitle } = styles;
const Resident: FC = () => {
    return(
        <>
            <Helmet>
                <title>
                    {nameProject} - Bienvenido, residente
                </title>
                <meta
                    name="description"
                    content="CityWorks, página especializada para residentes de obra."
                    //{nameProject} + "pagina especializada para residentes de obra."
                />
            </Helmet>
            <main>
                <EntityInterface />
                <h1 className={reportTitle}>Reporte global</h1>
                <button>Habilitar reporte</button>
                <button>Editar reporte</button>
                <button>Enviar reporte</button>
                <button>Eliminar reporte</button>
                <span id='spaceForm'>
                    <OverallReport />
                </span>
            </main>
        </>
    );
}

export default Resident;