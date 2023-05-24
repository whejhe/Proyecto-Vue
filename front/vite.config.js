import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import { fileURLToPath, URL } from 'node:url';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions:['.js','.ts', '.vue', '.json','.css'],
    modules:{
      rules:{
        test:/\.css$/i,
        use: ['vue-style-loader', 'css-loader'],
      }
    }
  },server:{
    https:{
      key:fs.readFileSync('src/Certificate/client-key.pem'),
      cert:fs.readFileSync('src/Certificate/client-cert.pem')
    }

  },
  test:{
    globals:true,
    environment: 'jsdom',
    deps:{
      inline:['vuetify']
    }
  }
})
