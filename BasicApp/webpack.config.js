// module.exports = {
//   entry: './src/app.js',
//   output: {
//     filename: './dist/app.bundle.js'
//   }
// }

var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'dist');
var APP_DIR = path.join(__dirname, 'src');

const VENDOR_LIBS =[
  'react', 'react-dom','react-router-dom'
]
var config = {
  // entry: APP_DIR + '/index.js',
  entry:{
    bundle:APP_DIR + '/index.js',
    vendor:VENDOR_LIBS
  },
  output: {
       path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
   optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },

        runtimeChunk: {
        name: "manifest",
      }
    },
 module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
          babelrc:false,
          presets:["babel-preset-env", "react", "stage-2"],
          plugins:['syntax-dynamic-import']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use:['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:"file-loader"
      }
    ]
  },
  devServer:{
    /* 
    if we use multiple folders to run the assets 
    ,path.join(_dirname, "assets")
    add this after the BUILD_DIR
    */
    contentBase:BUILD_DIR,
    compress:true,
    port:9000,
    disableHostCheck:false,
    // this is good for app with auth
    // headers:{
    //   "X-Custom-header":"custom"
    // },
    open:true,
    // helps with updating components that changed , and styles
    hot: true
  },
  plugins:[
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

module.exports = config;
