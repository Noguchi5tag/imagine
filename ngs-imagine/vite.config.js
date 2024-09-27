import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //追記
  plugins: [vue(), imagetools()],
})
