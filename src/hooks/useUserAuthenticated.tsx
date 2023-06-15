import { User } from '@/interfaces';
import { useCookies } from 'react-cookie';

const USER_COOKIE_KEY = 'user';

export const useUserAuthenticated = () => {
  const [cookie, setCookie] = useCookies([USER_COOKIE_KEY]);

  const registerUserCookie = (data: User) => {
    setCookie(USER_COOKIE_KEY, data);
  };

  return { cookie, registerUserCookie };
};
