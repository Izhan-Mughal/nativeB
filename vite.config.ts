import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ts-expect-error: Description of why the @ts-expect-error directive is necessary F
        "@": path.resolve(__dirname, "./src/"),
    }
  }
})
