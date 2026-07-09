import { api } from './api';

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin';
}

export const auth = {
  async register(username: string, email: string, password: string) {
    return api.post<User>('/register', { username, email, password });
  },

  async login(email: string, password: string) {
    return api.post<User>('/login', { email, password });
  },

  async logout() {
    return api.post('/logout');
  },
};
