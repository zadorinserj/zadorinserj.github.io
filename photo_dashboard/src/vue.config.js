const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
  baseUrl: './',
  filenameHashing: false,
  chainWebpack: (webpackConfig) => {
    if (process.env.NODE_ENV === 'production') {
      const inlineLimit = 1;
      const assetsPath = '/Themes/NormandyTheme/Content/VueFormer/';

      webpackConfig.plugin('extract-css')
        .use(MiniCssExtractPlugin, [{
          filename: path.join(assetsPath, 'css/[name].css'),
          publicPath: './',
          allChunks: true,
        }]);

      webpackConfig.module
        .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: inlineLimit,
          publicPath: assetsPath,
          useRelativePath: true,
          name: 'img/[name].[ext]',
        });

      webpackConfig.module
        .rule('fonts')
        .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: inlineLimit,
          useRelativePath: true,
          publicPath: assetsPath,
          name: 'fonts/[name].[ext]',
        });
    }
  },
};