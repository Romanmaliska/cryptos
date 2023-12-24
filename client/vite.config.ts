import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        // target: "http://localhost:5000",
        target: "https://crypto-server-193v.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
