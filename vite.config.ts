import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true,
                /* When using generateSW the PWA plugin will switch to classic */
                type: "module",
                navigateFallback: "index.html",
            },
            manifest: {
                name: "Vite TS Boilerplate",
                short_name: "vite_ts_boilerplate",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
        react(),
        tsConfigPaths(),
    ],
    server: {
        port: 4000,
        host: true, // Will expose this server on local network at <local.ip.add.ress>:4000 Can be useful for testing on real devices (mobile, tablet, second desktop with different os, etc)
        open: true, // Will open the site on a browser.
    },
});
