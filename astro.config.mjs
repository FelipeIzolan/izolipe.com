// @ts-check
import { resolve } from 'path';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import sitemap from "@astrojs/sitemap";

const MdxConf = {
  shikiConfig: {
    theme: 'github-dark',
    transformers: [
      {
        pre(node) {
          node.properties.style = "background-color:#212121;color:#e1e4e8;overflow-x:auto;"
        }
      }
    ]
  },
  rehypePlugins: [
    rehypeKatex,
  ],
  remarkPlugins: [
    remarkMath,
  ],
  gfm: true
}

// https://astro.build/config
export default defineConfig({
  site: 'https://izolipe.com/',
  prefetch: false,
  integrations: [mdx(MdxConf), sitemap()],
  vite: {
    resolve: {
      alias: {
        '#': resolve(import.meta.dirname, './src'),
        '@img': resolve(import.meta.dirname, './src/assets/imgs')
      }
    },
    esbuild: {
      legalComments: 'none'
    }
  },
  experimental: {
    svg: true
  },
  devToolbar: {
    enabled: false
  },
});
