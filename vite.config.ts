import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  server: {
    port: 4000,
    host: true, // Will expose this server on local network at <local.ip.add.ress>:4000 Can be useful for testing on real devices (mobile, tablet, second desktop with different os, etc)
    open: true, // Will open the site on a browser.
  },
});
