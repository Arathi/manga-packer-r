import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import monkey, { cdn } from 'vite-plugin-monkey';
import { resolve } from 'node:path';
import { visualizer } from "rollup-plugin-visualizer";

const HOMEPAGE_URL = "https://github.com/Arathi/manga-packer-r";
const USER_JS_PATH = "/raw/master/dist/manga-packer-r.user.js";
const DOWNLOAD_URL = `${HOMEPAGE_URL}${USER_JS_PATH}`;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 24246,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        name: "Manga Packer R",
        namespace: "com.undsf.tmus.mgpk",
        author: "Arathi of Nebnizilla",
        homepageURL: HOMEPAGE_URL,
        downloadURL: DOWNLOAD_URL,
        updateURL: DOWNLOAD_URL,
        match: [
          "https://telegra.ph/*",
          "https://nhentai.net/g/*/",
          "https://nhentai.xxx/g/*/",
          "https://e-hentai.org/g/*/*/",
        ],
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr("React", "umd/react.production.min.js"),
          "react-dom": cdn.jsdelivr(
            "ReactDOM",
            "umd/react-dom.production.min.js"
          ),
        },
      },
    }),
    visualizer(),
  ],
});
