import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vuetify({
			autoImport: true,
		}),
		VitePWA({
			registerType: "autoUpdate",
			devOptions: {
				enabled: true,
			},
			manifest: {
				name: "VueDictionary",
				short_name: "VueDictionary",
				icons: [
					{
						src: "./assets/img/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
				],
			},
			workbox: {
				globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
			},
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
