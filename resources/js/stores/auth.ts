import authService from '@/services/auth';
import { defineStore } from 'pinia';
import { User } from '@/types';
import { type LoginForm } from '@/types/auth';

export const useAuthStore = defineStore('auth', {
    state: (): { user: User | null, token: string | null } => ({
        user: null,
        token: localStorage.getItem('token'),
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
    },

    actions: {
        async login(payload: LoginForm) {
            try {
                const result = await authService.login(payload);
                this.token = result.data.token;
                this.user = result.data.user;
                return result;
            } catch (error) {
                throw error;
            }
        },

        async logout() {
            try {
                await authService.logout();
                this.token = null;
                this.user = null;
            } catch (error) {
                throw error;
            }
        },

        async fetchUser() {
            try {
                const response = await authService.fetchUser();
                this.user = response.data;
                return response;
            } catch (error) {
                throw error;
            }
        },
    },

    persist: true
});
