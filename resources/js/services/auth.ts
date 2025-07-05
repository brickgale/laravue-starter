import http from './';
import { type LoginForm } from '@/types/auth';

export default {
    async login(payload: LoginForm) {
        return await http.post('/login', payload);
    },

    async logout() {
        return await http.post('/logout');
    },

    async fetchUser() {
        return await http.get('/profile');
    },
};
