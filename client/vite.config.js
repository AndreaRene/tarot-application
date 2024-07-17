import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        open: true,
        proxy: {
            '/graphql': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false
            }
        }
    },
    optimizeDeps: {
        exclude: ['chunk-DFPONN5O', 'chunk-HVFJ3TQL', 'chunk-5RBEM5QR'],
        include: ['@splidejs/react-splide'],
        esbuildOptions: {
            target: 'esnext',
            supported: {
                bigint: true
            }
        },
        force: true
    }
});
