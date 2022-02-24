import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import path from 'path';
import { generateSW } from 'rollup-plugin-workbox';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '',
  build: {
    minify: 'terser',
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: false,
    terserOptions: {
      format: { comments: false },
      compress: true,
      mangle: true,
    },
    rollupOptions: {
      plugins: [
        replace({
          'typeof CANVAS_RENDERER': "'true'",
          'typeof WEBGL_RENDERER': "'true'",
          'typeof EXPERIMENTAL': "'false'",
          'typeof PLUGIN_CAMERA3D': "'false'",
          'typeof PLUGIN_FBINSTANT': "'false'",
          'typeof FEATURE_SOUND': "'false'",
          preventAssignment: true,
        }),
      ],
    },
  },
  plugins: [
    react(),
    generateSW({
      globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
      swDest: path.join('dist', 'sw.js'),
      globDirectory: path.join('dist'),
      globPatterns: ['**/*.{html,js,css,webmanifest}'],
      skipWaiting: true,
      clientsClaim: true,
      sourcemap: false,
      inlineWorkboxRuntime: false,
    }),
  ],
});
