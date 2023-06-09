import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import styles from '@/styles/components/asideuserprofile.module.scss';
interface AsideUserProfileProps {
  userName: string;
}

const {
  asideUserProfileContent,
  asideUserProfileName,
  asideUserProfileImage
} = styles;
export const AsideUserProfile: FC<AsideUserProfileProps> = ({ userName }) => {
  return (
    <aside className={asideUserProfileContent}>
      <FaUserCircle className={asideUserProfileImage}/>
      <h1 id={asideUserProfileName}>
        <strong>{userName}</strong>
        {/*Se cambiará 'ENTIDAD' por el nombre de usuario guardado en la sesión.*/}
      </h1>
      <br />
      <Link to={'/'}>
        <FaUserCircle />
        <p>Ver perfil</p>
      </Link>
    </aside>
  );
};
