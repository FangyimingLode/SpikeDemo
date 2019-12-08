/*
 * @Description: 插件配置表
 * @Author: Fangyiming
 * @Date: 2019-12-06 17:19:40
 * @LastEditTime: 2019-12-08 22:23:41
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: [
    {
      path: '/login',
      component: './login/index.tsx'
    },
    {
      path: '/',
      component: './home/home.tsx'
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: { webpackChunkName: true },
      title: 'spikeDemo',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
    ['react-css-modules', {
      generateScopedName: "[local]-[hash:base64:5]",
      webpackHotModuleReloading: true,
      filetypes: {
          '.less': {
              syntax: "postcss-less"
          }
      },
    }]
  ],
  proxy: {
    "/api": {
      target: "http://localhost:8080",
      changeOrigin: true
    }
  },
}

export default config;
