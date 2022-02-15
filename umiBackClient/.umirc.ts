import path from 'path';
import { defineConfig } from 'umi';
import routes from './src/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'blogMement后台管理',
  mfsu: {},
  webpack5: {},
  dva:{},
  routes,
  fastRefresh: {},
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@cps': path.resolve(__dirname, './src/components'),
    '@img': path.resolve(__dirname, './src/assets/img'),
  },
  cssLoader: {
    localsConvention: 'camelCase',
  },
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "~@/assets/css/mixins.less";',
    },
  },
});
