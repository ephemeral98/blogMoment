const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const FastRefreshCracoPlugin = require('craco-fast-refresh');
const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  // 代理接口
  

  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'config.js', '.json'],
    alias: {
      '@': ['./src'],
      '@page': ['./src/pages'],
      '@img': ['./src/assets/img'],
      '@cps': ['./src/components'],
      '@hooks': ['./src/hooks'],
    },
  },

  webpack: {
    plugins: [
      new SimpleProgressWebpackPlugin(),

      new TerserPlugin({
        // sourceMap: false, //Must be set to true if using source-maps in production
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            drop_console: process.env.NODE_ENV === 'production', // 生产环境下移除控制台所有的内容
            drop_debugger: false, // 移除断点
            pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log'] : '', // 生产环境下移除console
          },
        },
      }),
    ],
    configure: (webpackConfig, { env, paths }) => {
      // paths.appPath='public'
      paths.appBuild = 'dist';
      webpackConfig.output = {
        ...webpackConfig.output,
        // ...{
        //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
        //   chunkFilename: 'static/js/[name].js'
        // },
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/',
      };
      return webpackConfig;
    },
  },
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
          // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
          // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true,
          },
        },
      ],
    ],
    plugins: [
      // 配置 babel-plugin-import
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
      // 配置解析器
      // ['@babel/plugin-proposal-decorators', { legacy: true }],
      // ['@babel/plugin-proposal-class-properties', { loose: true }],
      // ['babel-plugin-styled-components', { displayName: true }],
    ],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },

  plugins: [
    /* {
      plugin: FastRefreshCracoPlugin,
    }, */
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
};
