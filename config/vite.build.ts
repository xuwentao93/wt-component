import path from 'path';
import glob from 'glob';

const components = glob.sync(path.join(__dirname, '../src/component/*/')).reduce((prev: object, curr: string) => ({
  [`${path.basename(curr)}`]: curr,
  ...prev
}), {});

const buildConfig = {
  build: {
    rollupOptions: {
      // 不需要打包的库.
      external: ['react'],
      output: {
        entryFileNames: 'index.js',
        chunkFileNames: 'index.js',
        assetFileNames: 'index.[ext]',
        format: 'es'
      },
      input: {
        index: path.join(__dirname, '../src/component/index.js')
        // ...components
      }
    }
  }
};

export default buildConfig;
