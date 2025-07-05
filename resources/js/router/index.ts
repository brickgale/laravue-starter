import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

const AdminLayout = () => import('@/layouts/AdminLayout.vue');

const Login = () => import('@/pages/Login.vue');
const Dashboard = () => import('@/pages/admin/Dashboard.vue');

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'login' },
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { guest: true },
    },
    {
        path: '/dashboard',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: Dashboard,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'text-primary dark:text-primary bg-primary/10 dark:bg-primary/20',
});

router.beforeEach((to, from, next)  => {
    const authStore = useAuthStore();

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ name: 'login' });
    } else if (to.meta.guest && authStore.isAuthenticated) {
        next({ name: 'dashboard' });
    } else {
        next();
    }
});

export default router;
