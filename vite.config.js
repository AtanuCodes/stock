import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {

  const env = loadEnv(mode, process.cwd());
  
  return {
    plugins: [react()],
    base: '/', 
    // base: env.VITE_BASE_PATH + '/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        'react-virtualized/List': 'react-virtualized/dist/es/List',
      },
    },
    optimizeDeps: {
      exclude: ['js-big-decimal']
    }
  }

})
