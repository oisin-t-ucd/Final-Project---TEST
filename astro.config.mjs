// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://oisin-t-ucd.github.io',
    base: '/Final-Project---TEST',
    server: {
        host: true,   // listens on all network interfaces
        port: 3000,   // example port
    }

})