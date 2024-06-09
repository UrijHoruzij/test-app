import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	base: 'https://urijhoruzij.github.io/test-app/',
	plugins: [react()],
});
