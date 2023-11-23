import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@src': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@fb': fileURLToPath(new URL('./firebase', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
		},
	},
})
