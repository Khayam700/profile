import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/profile/' : '/'
})
