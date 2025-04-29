import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

const repoName = 'La-ruche-de-Lorient';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${repoName}/`,
});