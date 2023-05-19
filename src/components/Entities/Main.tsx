import { FC } from 'react';
import { nameProject } from '@/variables/index.ts';
import styles from '@/styles/components/entities.module.scss';

const {
    entityMain,
    entityName,
    entityImage,
} = styles;
export const Main: FC = () => {
    return(
        <>
            <main>
                <aside id={entityMain}>
                    <img src="@/images/profile.png" alt="" />
                    <h1 id={entityName}><strong>ENTIDAD</strong>.
                        {/*Se cambiará 'ENTIDAD' por el nombre de usuario guardado en la sesión.*/}
                    </h1>
                </aside>
            </main>
        </>
    );
}