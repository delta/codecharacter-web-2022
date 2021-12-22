import replace from '@rollup/plugin-replace';
import html from '@web/rollup-plugin-html';
import path from 'path';
import minifyHtml from 'rollup-plugin-minify-html-literals';
import { generateSW } from 'rollup-plugin-workbox';
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve(__dirname, 'html'),
  base: '',
  build: {
    minify: 'terser',
    outDir: path.resolve(__dirname, 'dist'),
    terserOptions: {
      format: { comments: false },
      compress: true,
      mangle: true,
    },
    rollupOptions: {
      external: ['lit', '@lit-labs/motion', 'phaser'],
      input: {
        main: path.resolve(__dirname, './html/index.html'),
        dashboard: path.resolve(__dirname, './html/dashboard.html'),
        leaderboard: path.resolve(__dirname, './html/leaderboard.html'),
        profile: path.resolve(__dirname, './html/profile.html'),
      },
      output: {
        paths: {
          lit: 'https://cdn.skypack.dev/pin/lit@v2.0.2-4UgtPPxuKjtEctw2pSkI/mode=imports,min/optimized/lit.js',
          '@lit-labs/motion':
            'https://cdn.skypack.dev/pin/@lit-labs/motion@v1.0.1-9IY0bBv49prbSljmN9AK/mode=imports,min/optimized/@lit-labs/motion.js',
          phaser: 'https://esm.sh/phaser',
        },
      },
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
        html({
          minify: true,
          injectServiceWorker: true,
          serviceWorkerPath: 'dist/sw.js',
          input: [
            'html/index.html',
            'html/dashboard.html',
            'html/leaderboard.html',
            'html/profile.html',
          ],
        }),
        minifyHtml(),
      ],
    },
  },
  plugins: [
    generateSW({
      globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
      swDest: path.join('dist', 'sw.js'),
      globDirectory: path.join('dist'),
      globPatterns: ['**/*.{html,js,css,webmanifest}'],
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        { urlPattern: 'polyfills/*.js', handler: 'CacheFirst' },
        {
          urlPattern: ({ url }) => url.origin === 'https://cdn.skypack.dev',
          handler: 'CacheFirst',
        },
        {
          urlPattern: ({ url }) => url.origin === 'https://esm.sh',
          handler: 'CacheFirst',
        },
        {
          urlPattern: ({ url }) =>
            url.origin === 'https://cdnjs.cloudflare.com',
          handler: 'CacheFirst',
        },
        {
          urlPattern: ({ url }) => url.origin === 'https://cdn.jsdelivr.net',
          handler: 'CacheFirst',
        },
      ],
      sourcemap: false,
      inlineWorkboxRuntime: false,
    }),
  ],
});
