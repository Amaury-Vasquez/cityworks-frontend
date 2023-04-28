import { FC } from 'react';
import styles from '@/styles/components/login.module.scss';
import { Button, TextInput } from '@/components';

const { loginForm, inputGroup } = styles;

export const LoginForm: FC = () => {
  return (
    <form className={loginForm}>
      <h3> Iniciar Sesión </h3>
      <div className={inputGroup}>
        <TextInput
          id="email"
          type="email"
          placeholder="youremail@example.com"
          label="Correo electrónico"
        />
        <TextInput
          id="password"
          type="password"
          placeholder="********"
          label="Contraseña"
        />
        <Button>Iniciar sesión</Button>
      </div>
    </form>
  );
};
