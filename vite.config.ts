/* eslint-disable */
import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import AhooksResolver from 'unplugin-auto-import-ahooks'
import AntdResolver from 'unplugin-auto-import-antd'

import { defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/

export default ({ mode }) => {
  console.log('mode', loadEnv(mode, process.cwd()).VITE_BASE_URL) //127.0.0.1:9000/api
  return defineConfig({
    plugins: [
      react(),
      AutoImport({
        dts: '@types/auto-imports.d.ts',
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        ],
        imports: [
          'react',
          'react-router-dom',
          {
            from: 'react',
            imports: ['Suspense'],
          },
          {
            from: 'use-immer',
            imports: ['useImmer'],
          },
          {
            from: '@ant-design/icons',
            imports: [['default', 'AIcon']],
          },
        ],
        resolvers: [AntdResolver({ prefix: 'A' }), AhooksResolver()],
        dirs: [
          'src/api/**',
          'src/components/**',
          'src/hooks/**',
          'src/layouts/*/index.tsx',
          'src/providers/**',
          'src/store/**',
        ],
      }),
      {
        ...viteCompression(),
        apply: 'build',
      },
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/variables.scss" as *;`,
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom', 'zustand'],
            antd: ['antd'],
          },
        },
      },
    },
    base: '/',
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      proxy: {
        '/api': {
          target: '要代理的地址',
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  })
}
