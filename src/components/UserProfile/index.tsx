import { FC } from 'react';
import { nameProject } from '@/constants/index.ts';
import styles from '@/styles/components/operations.module.scss';

const {
  userMain,
  userName,
  //userImage,
} = styles;
export const UserProfile: FC = () => {
  return (
    <div className={userMain}>
      <h1 id={userName}>
        <strong>ENTIDAD</strong>
        {/*Se cambiará 'ENTIDAD' por el nombre de usuario guardado en la sesión.*/}
      </h1>
    </div>
  );
};
