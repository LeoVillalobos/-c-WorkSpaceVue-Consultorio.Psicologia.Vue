
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { COOKIE_NAME_SESSION } from '@/helpers/constants';


interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: Cookies.get(COOKIE_NAME_SESSION) || null,
  }),
  actions: {
    setToken(token: string) {
      Cookies.set(COOKIE_NAME_SESSION, token);
      this.token = token;
    },
    logout() {
      Cookies.remove(COOKIE_NAME_SESSION);
      this.token = null;
    },
  },
});
