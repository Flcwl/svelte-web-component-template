import sveltePreprocess from 'svelte-preprocess'

export default {
  // https://github.com/sveltejs/svelte-preprocess
  preprocess: sveltePreprocess(),
  compilerOptions: {
    // css: false,
    customElement: true,
  }
}
