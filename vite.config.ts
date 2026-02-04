import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { cloudflare } from "@cloudflare/vite-plugin"

export default defineConfig({
	base: "/_admin/",
	build: {
		outDir: "dist",
	},
	plugins: [
		react(),
		cloudflare({
			configPath: "./wrangler.jsonc",
			persistState: false,
		}),
	],
})
