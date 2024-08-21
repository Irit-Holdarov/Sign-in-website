const path = require('path');
import { defineConfig } from 'vite';

export default ({ mode = 'development' }) => {
  const isProductionBuild = mode !== 'development';

  return defineConfig({
    base: isProductionBuild ? '/home' : '/',
    root: path.resolve(__dirname, 'src'),
    build: {
      outDir: '../dist',
    },
    server: {
      port: 8777,
    },
  });
};
