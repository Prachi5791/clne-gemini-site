// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Gemini_clone_project/', // Set to your specific subdirectory if needed
  plugins: [react()],
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: {
  //       main: 'index.html'
  //     }
  //   }
  // }
});

