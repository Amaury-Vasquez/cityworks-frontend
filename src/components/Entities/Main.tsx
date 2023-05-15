import { FC } from 'react';
import { nameProject } from '@/variables/index.ts';
import styles from '@/styles/components/entities.module.scss';

const {
    entityMain,
    entityActivities,
    entitySemaphore,
    entityName,
    entityActivityList
} = styles;
export const Main: FC = () => {
    return(
        <>
            <main>
                <section id={entityMain}>
                    <h1 id={entityName}>Bienvendo a la plataforma de {nameProject}, <strong>ENTIDAD</strong>.
                        {/*Se cambiará 'ENTIDAD' por el nombre de usuario guardado en la sesión.*/}
                    </h1>
                    <div id={entityActivityList}>
                        <p>Éstas son las actividades de hoy: </p>
                        <ul>
                            <li className={entityActivities}>ACTIVIDAD</li>
                            {/**Se generará el listado de actividades pendientes.*/}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}