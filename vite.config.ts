import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    // Since this is deployed to `https://rblakeman.github.io/YouTubeApp/`
    base: '/YouTubeApp/',
    plugins: [react()],
    server: {
        port: 3000,
    },
});
