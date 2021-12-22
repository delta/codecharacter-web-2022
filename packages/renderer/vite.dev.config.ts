import replace from '@rollup/plugin-replace';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: 'codecharacter-renderer-2022',
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'codecharacter-renderer-2022',
    },
    rollupOptions: {
      external: ['phaser', 'lit'],
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
      output: {
        globals: {
          phaser: 'Phaser',
          lit: 'lit',
        },
      },
    },
  },
});
