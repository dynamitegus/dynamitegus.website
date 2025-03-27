// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";
import astroExpressiveCode from "astro-expressive-code";

import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'

// https://astro.build/config
export default defineConfig({
  site: "https://dynamitegus.au",
  integrations: [
    tailwind(),
    
    react({}),
    astroExpressiveCode({
      plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
      defaultProps: {
        // Change the default style of collapsible sections
        collapseStyle: 'collapsible-start',
      },
      themes: ['catppuccin-mocha'],
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
    },
  },
});
