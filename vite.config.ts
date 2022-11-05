import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import path from 'path';
import { extractorSvelte } from '@unocss/core'

const unoConfig = {
  shortcuts: {
    'centerLayout': 'flex justify-center items-center',
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const common = {
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, '/src') },
      ],
    },
  };

  if (command === 'serve') {
    return {
      plugins: [
        Unocss({
          extractors: [extractorSvelte],
          ...unoConfig,
        }),
        svelte({
          compilerOptions: {
            customElement: true
          }
        }),
      ],
      ...common,
    }
  }

  if (command === 'build') {
    return {
      ...common,
      plugins: [
        Unocss({
          extractors: [extractorSvelte],
          mode: 'svelte-scoped',
          ...unoConfig,
        }),
        svelte({
          compilerOptions: {
            customElement: true
          }
        }),
      ],
      build: {
        cssCodeSplit: true,
        lib: {
          entry: path.resolve(__dirname, 'src/components/index.ts'),
          name: 'MyLib',
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          // external: ['unocss'],
          output: {
            // globals: {
              // unocss: 'unocss'
            // }
          }
        }
      }
    }
  }

})
