// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        shop: "shop.html",
        view: "view.html",
        login: "login.html",
        account: "account.html",
      },
    },
  },
});
