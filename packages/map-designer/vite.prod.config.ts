import replace from '@rollup/plugin-replace';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      formats: ['es'],
      name: 'codecharacter-map-designer-2022',
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'codecharacter-map-designer-2022',
    },
    rollupOptions: {
      external: ['phaser', 'lit', 'react'],
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
          react: 'React',
        },
      },
    },
    sourcemap: true,
  },
});
