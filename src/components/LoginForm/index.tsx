import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styles from '@/styles/components/login.module.scss';
import { Button, TextInput } from '@/components';
import { useUserAuthenticated } from '@/hooks';
import { UserLogin } from '@/interfaces';
import { authenticateUser } from '@/queries';

const { loginForm, inputGroup } = styles;

export const LoginForm: FC = () => {
  const { handleSubmit, register } = useForm<UserLogin>();
  const { cookie, registerUserCookie } = useUserAuthenticated();

  const onSubmit = async (data: UserLogin) => {
    console.log('🚀 ~ file: index.tsx:14 ~ onSubmit ~ data:', data);
    const response = await authenticateUser(data);
    if (response.status === 200) registerUserCookie(response.user);

    console.log('🚀 ~ file: index.tsx:15 ~ onSubmit ~ response:', response);
  };

  return (
    <form className={loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h3> Iniciar Sesión </h3>
      <div className={inputGroup}>
        <TextInput
          id="email"
          type="email"
          placeholder="youremail@example.com"
          label="Correo electrónico"
          {...register('email', { required: true })}
        />
        <TextInput
          id="password"
          type="password"
          placeholder="********"
          label="Contraseña"
          {...register('password', { required: true })}
        />
        <Button type="submit">Iniciar sesión</Button>
      </div>
    </form>
  );
};
