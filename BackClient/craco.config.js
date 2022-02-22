const cracoLess = require('craco-less'); //单独配置babel无效，需要和craco-less 一起样式才有效果
const path = require('path');
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  webpack: {
    externals: {
      // echarts: 'echarts',
    },
    alias: {
      '@': pathResolve('src'),
      '@img': pathResolve('src/assets/img'),
      '@css': pathResolve('src/assets/css'),
      '@cps': pathResolve('src/components')
    },
  },
  babel: {
    plugins: [
      //第一个 style 为 true ,需要配置 craco-less一起才能生效
      ['import', { libraryName: 'antd', style: true }],
      //第二种 style 为css ,不需要 craco-less
      // ['import', { libraryName: 'antd', libraryDirectory: 'es', style: "css" }],
    ],
  },
  plugins: [
    {
      plugin: cracoLess,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1890ff' },
            javascriptEnabled: true,
            //配置全局less 变量，不需要在使用的地方导入了
            globalVars: {
              hack: `true; @import '~@/assets/css/pre.less';`,
            },
          },
        },
      },
    },
  ],
};
