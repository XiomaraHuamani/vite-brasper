import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Importa path para resolver rutas

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Define @ como alias para la carpeta src
    },
  },
});
