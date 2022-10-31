import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true
    }
  },
  site: "https://himburnerslee.com",
  integrations: [mdx({}), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image(), sitemap()],
  // output: "server",
  // adapter: vercel()
});