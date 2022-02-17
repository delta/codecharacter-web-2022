import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import html from '@web/rollup-plugin-html';
import path from 'path';
import minifyHtml from 'rollup-plugin-minify-html-literals';
import { generateSW } from 'rollup-plugin-workbox';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    base: '',
    minify: 'terser',
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: true,
    terserOptions: {
      format: { comments: false },
      compress: true,
      mangle: true,
    },
    rollupOptions: {
      plugins: [
        replace({
          'typeof CANVAS_RENDERER': 'false',
          'typeof WEBGL_RENDERER': 'false',
          'typeof EXPERIMENTAL': 'false',
          'typeof PLUGIN_CAMERA3D': 'false',
          'typeof PLUGIN_FBINSTANT': 'false',
          'typeof FEATURE_SOUND': 'false',
          preventAssignment: true,
        }),
        html({
          minify: true,
          injectServiceWorker: true,
          serviceWorkerPath: 'dist/sw.js',
          input: ['index.html'],
        }),
        minifyHtml(),
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
