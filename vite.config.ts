import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    build: {
        manifest: 'manifest.json',
        emptyOutDir: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.ts',
        },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true
        }),
        tailwindcss(),
        vue(),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json', '.d.ts', '.css'],
        alias: {
            '@': resolve(__dirname, './resources/js'),
            '@ui': resolve(__dirname, './resources/js/components/ui'),
            '@css': resolve(__dirname, `./resources/css`),
        },
    },
});
