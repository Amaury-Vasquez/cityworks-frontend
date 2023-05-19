import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { nameProject } from '@/variables/index.ts';
import { EntityInterface } from '@/components/Entities';

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
            </main>
        </>
    );
}

export default Resident;