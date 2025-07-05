<script lang="ts" setup>
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { AutoForm } from '@ui/auto-form';
import { Button } from '@ui/button';
import { Switch } from '@ui/switch';
import { toast } from 'vue-sonner';
import { useColorMode } from '@vueuse/core';
import router from '@/router';

import { useAuthStore } from '@/stores/auth';
import { loginFormSchema, type LoginForm } from '@/types/auth';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { type ErrorResponse } from '@/types';
import { computed } from 'vue';

const authStore = useAuthStore();
const mode = useColorMode();

const loginForm = useForm({
    validationSchema: toTypedSchema(loginFormSchema),
});

const isDarkMode = computed({
    get: () => mode.value === 'dark',
    set: (value: boolean) => {
        mode.value = value ? 'dark' : 'light';
    }
});

const toggleMode = () => mode.value = mode.value === 'dark' ? 'light' : 'dark';

const handleLogin = (payload: LoginForm) => {
    authStore
        .login(payload)
        .then(res => {
            toast.success('Welcome back, ' + res.data.user.name);
            router.push({ name: 'dashboard' });
        })
        .catch((err: ErrorResponse) => {
            toast.error(err.response.data.message || 'An error occurred while logging in');
        });
};

</script>

<template>
    <div class="flex h-screen w-screen items-center justify-center">
        <div class="max-w-[400px] w-full flex flex-col">
            <div class="flex items-center justify-between mb-4">
                <span>User Login</span>
                <div class="flex items-center justify-center">
                    <span class="text-xs">Theme Toggle</span>
                    <Switch
                        class="ml-2"
                        v-model="isDarkMode"
                        @change="toggleMode"
                    />
                </div>
            </div>
            <Card class="gap-2">
                <CardHeader>
                    <CardTitle>
                        <!-- <Logo class="py-1" /> -->
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <AutoForm
                        :schema="loginFormSchema"
                        :model="loginForm"
                        @submit="handleLogin"
                        class="space-y-4"
                        :field-config="{ 
                            email: { 
                                label: 'Email',
                                inputProps: {
                                    type: 'text',
                                    placeholder: 'Enter your email',
                                },
                            },
                            password: { 
                                label: 'Password',
                                inputProps: {
                                    type: 'password',
                                    placeholder: 'Enter your password',
                                },
                            },
                            remember: {
                                label: 'Remember me'
                            }
                        }"
                    >
                        <Button type="submit" class="w-full">
                            Login
                        </Button>
                    </AutoForm>
                </CardContent>
            </Card>
        </div>
    </div>
</template>