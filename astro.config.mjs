import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://my-blog.vercel.app',
  output: 'static',
  integrations: [mdx()]
});
