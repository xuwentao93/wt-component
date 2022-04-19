import path from 'path';
import glob from 'glob';

const components = glob.sync(path.join(__dirname, '../src/component/*/')).reduce((prev, curr) => ({
  [`${path.basename(curr)}`]: curr,
  ...prev
}), {});

const buildConfig = {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name]/index.js',
        chunkFileNames: '[name]/index.js',
        assetFileNames: '[name]/index.[ext]'
      },
      input: {
        ...components
      }
    }
  }
};

export default buildConfig;
