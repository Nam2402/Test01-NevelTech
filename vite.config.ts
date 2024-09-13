import path from 'path';
import { defineConfig, loadEnv, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import imageMinPlugin from 'vite-plugin-imagemin';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = env.PORT || 8001;

  return {
    base: '/',
    build: {
      target: 'es2015',
      outDir: 'public',
      emptyOutDir: true,
      manifest: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          entryFileNames: 'app.[hash].js',
          chunkFileNames: 'app.[hash].chunk.js',
          assetFileNames: 'assets.[hash].[ext]',
        },
      },
    },
    mode: env.NODE_ENV,
    server: {
      host: '0.0.0.0',
      port: port as number,
    },
    define: {
      APP_URL: JSON.stringify(env.APP_URL),
      NODE_ENV: JSON.stringify(env.NODE_ENV),
      PORT: JSON.stringify(env.PORT),
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
        config: path.resolve(__dirname, 'src/config'),
        types: path.resolve(__dirname, 'src/types'),
        styles: path.resolve(__dirname, 'src/styles'),
        pages: path.resolve(__dirname, 'src/pages'),
        i18n: path.resolve(__dirname, 'i18n'),
        assets: path.resolve(__dirname, 'assets'),
        src: path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      }),
      eslintPlugin(),
      stylelintPlugin(),
      imageMinPlugin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: true,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
      copy({
        verbose: true,
        hook: 'writeBundle',
        targets: [
          {
            src: 'assets/fonts',
            dest: 'public/assets',
          },
          {
            src: 'assets/images',
            dest: 'public/assets',
          },
          {
            src: 'robots.txt',
            dest: 'public',
          },
        ],
      }),
      AutoImport({
        eslintrc: {
          enabled: true,
        },
        imports: [
          'react',
          { react: ['cloneElement', 'StrictMode', 'Suspense'] },
          {
            antd: ['ConfigProvider'],
          },
          {
            'lodash-es': ['map'],
          },
          {
            'react-helmet-async': ['HelmetProvider', 'Helmet'],
          },
          {
            'react-router-dom': [
              'createBrowserRouter',
              'RouterProvider',
              'Link',
              'useNavigate',
              'NavLink',
              'useParams',
              'Outlet',
            ],
          },
          {
            'react-i18next': ['initReactI18next', 'Trans', 'Translation'],
          },
          {
            from: 'react',
            imports: [
              'FunctionComponent',
              'ReactNode',
              'Key',
              'ComponentType',
              'ComponentProps',
              'Ref',
            ],
            type: true,
          },
        ],
        dirs: ['src/shared'],
        dts: 'src/types/auto-imports.d.ts',
      }),
    ],
  };
});
