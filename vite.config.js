import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define an alias for the 'src' folder
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png'], // Include image assets like JPG, PNG
});
