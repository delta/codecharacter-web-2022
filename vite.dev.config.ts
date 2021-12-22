import replace from '@rollup/plugin-replace';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
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
});
