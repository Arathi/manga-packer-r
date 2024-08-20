import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import monkey, { cdn } from "vite-plugin-monkey";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

const HOMEPAGE_URL = `https://github.com/Arathi/manga-packer-r`;
const USER_JS_PATH = "/raw/master/dist/manga-packer-r.user.js";
const DOWNLOAD_URL = `${HOMEPAGE_URL}${USER_JS_PATH}`;

export default defineConfig({
  server: {
    port: 24246,
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
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
