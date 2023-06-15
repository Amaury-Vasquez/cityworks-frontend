import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { nameProject } from '@/constants/index.ts';
import { OperationsSection } from '@/components/Operations';
import { UserProfile } from '@/components/UserProfile';
import { operations } from '@/constants';
import styles from '@/styles/pages/users.module.scss';

const {userContent} = styles;
const Guess: FC = () => {
    const guessOperations = operations.filter(operation =>
        operation.section === 'guess')
    return(
        <>
            <Helmet>
            <title>
                    {nameProject} - Bienvenido a la sección de estimaciones.
                </title>
                <meta
                    name="description"
                    content={nameProject + ", página especializada para operaciones sobre estimaciones por el Superintendente."}
                    //{nameProject} + "pagina especializada para residentes de obra."
                />
            </Helmet>
            <main className={userContent}>
                <UserProfile />
                {guessOperations? <OperationsSection /> : null}
            </main> 
        </>
    );
}

export default Guess;