import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import monkey, { cdn } from "vite-plugin-monkey";
import { visualizer } from "rollup-plugin-visualizer";
import { vitePluginForArco as arco } from "@arco-plugins/vite-react";

export default defineConfig({
  server: {
    port: 24246,
  },
  plugins: [
    react(),
    // arco({
    //   style: false,
    // }),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://vitejs.dev/logo.svg",
        name: "Manga Packer R",
        namespace: "com.undsf.tmus.mgpk",
        author: "Arathi of Nebnizilla",
        homepageURL: "https://github.com/Arathi/manga-packer-r",
        downloadURL:
          "https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js",
        updateURL:
          "https://github.com/Arathi/manga-packer-r/raw/master/dist/manga-packer-r.user.js",
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
          // "@arco-design/web-react": cdn.jsdelivr("arco", "dist/arco.min.js"),
        },
        externalResource: {
          // "@arco-design/web-react/dist/css/arco.min.css": cdn.jsdelivr(),
        },
      },
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pkg": path.resolve(__dirname, "package.json"),
    },
  },
});
