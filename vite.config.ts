import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [{ find: '@', replacement: '/src' }],
	},
	base: '/test-app/',
	plugins: [react()],
	server: {
		host: true,
	},
});
