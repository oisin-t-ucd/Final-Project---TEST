// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://leijahmariexoxo.github.io',
    base: '/Final-Project---Music-by-Mood',
    server: {
        host: true,   // listens on all network interfaces
        port: 3000,   // example port
    }

})