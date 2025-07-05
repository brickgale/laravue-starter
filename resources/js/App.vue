<script setup lang="ts">
import '@css/app';
import { Toaster } from '@ui/sonner';
import 'vue-sonner/style.css';
</script>

<template>
    <Toaster richColors />
    <router-view />
</template>