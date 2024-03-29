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
        checkout: "checkout.html",
        profileinfo: "profile-info.html",
        manageaddress: "manage-address.html",
        ordercomplete: "order-complete.html",
        register: "register.html",
        wishlist: "wishlist.html",
        cart: "cart.html",
        changepassword: "change-password.html",
      },
    },
  },
});
