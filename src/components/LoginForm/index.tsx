import { FC } from 'react';
import styles from '@/styles/components/login.module.scss';
import { Button, TextInput } from '@/components';

const { loginForm, inputGroup, loginInfo, registerLink } = styles;

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
      <span className={loginInfo}>
        ¿No tienes una cuenta? <br />
        <a className={registerLink} href="/register">
          Regístrate
        </a>
      </span>
    </form>
  );
};
