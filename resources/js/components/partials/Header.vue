<script lang="ts" setup>
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { handleError } from '@/lib/utils';
import { toast } from 'vue-sonner';

const authStore = useAuthStore();

const logout = () => {
    authStore.logout()
        .then(() => {
            router.push({ name: 'login' });
            toast.success('Logged out Successfully');
        }, (err) => {
            handleError('Logout Failed', err);
        });
};
</script>

<template>
    <header class="app-header flex items-center gap-2 px-4 py-3 border border-l-0">
        <h1>Admin Dashboard</h1>
        <nav>
            <ul>
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <li>
                    <Button 
                        @click="logout"
                    >Logout</Button>
                </li>
            </ul>
        </nav>
    </header>
</template>