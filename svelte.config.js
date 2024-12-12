import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Use the static adapter and specify the output directory as 'build'
    adapter: adapter({
      out: 'build'
    }),

    prerender: {
      entries: ['*'] // Prerender all pages
    },

	paths: {
		base: '/Vertical-Horizon-Convert' // GitHub Pagesでのプロジェクト名を指定
	}
  }
};

export default config;