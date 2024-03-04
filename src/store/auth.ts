
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: Cookies.get('token') || null,
  }),
  actions: {
    setToken(token: string) {
      Cookies.set('token', token);
      this.token = token;
    },
    logout() {
      Cookies.remove('token');
      this.token = null;
    },
  },
});
