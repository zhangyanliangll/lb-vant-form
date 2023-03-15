import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import type { UserConfigExport } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const defaultConfig: UserConfigExport = {
    plugins: [vue(), vueJsx(), DefineOptions()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./examples', import.meta.url))
      }
    }
  }

  // 当执行 yarn lib 设置环境变量 --mode lib 时
  if (env.mode === 'lib') {
    defaultConfig.build = {
      cssCodeSplit: false,
      lib: {
        entry: resolve(__dirname, 'packages/main.ts'),
        name: 'lb-vant-form',
        fileName: 'lb-vant-form'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
          dir: 'lib'
        }
      }
    }
  }
  return defaultConfig
})
