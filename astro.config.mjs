import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel";
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert';

export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  output: "server",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkGithubBlockquoteAlert],
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
        ignored: ['**/node_modules/**', '**/.git/**'],
      },
    },
  },
});