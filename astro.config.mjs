import { defineConfig } from 'astro/config';
import { SITE } from './src/constants';

const dropOptions = process.env.NODE_ENV === 'development'
  ? []
  : ['console', 'debugger'];

export default defineConfig({
  site: SITE.DOMAIN,
  base: SITE.BASE,
  outDir: `./dist/${SITE.BASE}/`,
  trailingSlash: 'always',
  vite: {
    esbuild: {
      drop: dropOptions,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            $base: '${SITE.BASE}';
            @use './src/styles/variables' as *;
          `
        }
      }
    }
  },
});