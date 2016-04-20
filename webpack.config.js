/** Modules */
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = (function makeWebpackConfig () {
  /**
   * Port
   * This is default port for dev server
   */
  var port = 8080;

  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = isTest ? {} : {
    app: './src/components/Core/App/AppComponent.js'
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  config.output = isTest ? {} : {
    path: __dirname + '/dist',  /** Absolute output directory */

    /**
     * Output path from the view of the page
     * Uses webpack-dev-server in development
     */
    publicPath: isProd ? '/' : 'http://localhost:' + port + '/',

    /**
     * Filename for entry points
     * Only adds hash in build mode
     */
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',

    /**
     * Filename for non-entry points
     * Only adds hash in build mode
     */
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (isTest) {
    config.devtool = 'inline-source-map';
  }
  if (isProd) {
    config.devtool = 'source-map';
  }

  if (!isTest && !isProd) {
    config.devtool = 'eval-source-map';
  }

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

  /** Initialize module */
  config.module = {
    preLoaders: [],
    loaders: [{
      /**
       * JS LOADER
       * Reference: https://github.com/babel/babel-loader
       * Transpile .js files using babel-loader
       * Compiles ES6 and ES7 into ES5 code
       */
      test: /\.js$/,
      loaders: ['ng-annotate', 'babel'],
      exclude: /node_modules/
    }, { /** This loader config depend on line 178 */
      /**
       * CSS LOADER
       * Reference: https://github.com/webpack/css-loader
       * Allow loading css through js
       * Compiles ES6 and ES7 into ES5 code
       *
       * Reference: https://github.com/postcss/postcss-loader
       * Postprocess your css with PostCSS plugins
       */
      test: /\.scss$/,

      /**
       * CSS LOADER
       * Reference: https://github.com/webpack/extract-text-webpack-plugin
       * Extract css files in production builds
       * Modularize styles
       * Compiles ES6 and ES7 into ES5 code
       *
       * Reference: https://github.com/webpack/style-loader
       * Use style-loader in development.
       */
      loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
    }, {

      /**
       * ASSET LOADER
       * Reference: https://github.com/webpack/file-loader
       * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
       * Rename the file using the asset hash
       * Pass along the updated reference to your code
       * You can add here any file extension you want to get copied to your output
       */
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {

      /**
       * HTML LOADER
       * Reference: https://github.com/webpack/raw-loader
       * Allow loading html through js
       */
      test: /\.html$/,
      loader: 'html'
    }, {

      /**
       * JADE LOADER
       * Reference: https://github.com/webpack/jade-loader
       * Allow loading jade through js
       */
      test: /\.jade$/,
      loader: 'jade'
    }]
  };

  /**
   * ISPARTA LOADER
   * Reference: https://github.com/ColCh/isparta-instrumenter-loader
   * Instrument JS files with Isparta for subsequent code coverage reporting
   * Skips node_modules and files that end with .spec.js and .e2e.js
   */
  if (isTest) {
    config.module.preLoaders.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/,
        /\.e2e\.js$/
      ],
      loader: 'isparta-instrumenter'
    });
  }

  /** Compressing classNames on production */
  if (isProd) {
    config.module.loaders[1].loader = ExtractTextPlugin.extract('style', 'css?modules&sourceMap&localIdentName=[local]_[hash:base64:10]!postcss');
  }

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes and other operations to your css
   */
  config.postcss = function (bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('postcss-inline-comment')(),
      require('postcss-hexrgba'),
      require('postcss-size'),
      require('precss')(),
      require('postcss-functions')({
        functions: {}
      }),
      require('css-mqpacker')(),
      require('postcss-discard-comments/dist/index')(),
      require('autoprefixer')({
        browsers: ['last 2 version']
      })
    ];
  };

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [];

  /** Skip rendering index.html in test mode */
  if (!isTest) {

    /**
     * Reference: https://github.com/ampedandwired/html-webpack-plugin
     * Render index.html
     */
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: './src/index.jade',
        inject: 'body'
      }),

      /**
       * Reference: https://github.com/webpack/extract-text-webpack-plugin
       * Extract css files
       * Disabled when in test mode or not in build mode
       */
      new ExtractTextPlugin('[name].[hash].css', {disable: !isProd})
    );
  }

  /** Add build specific plugins */
  if (isProd) {
    config.plugins.push(

      /**
       * Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
       * Only emit files when there are no errors
       */
      new webpack.NoErrorsPlugin(),

      /**
       * Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
       * Dedupe modules in the output
       */
      new webpack.optimize.DedupePlugin(),

       /**
       * Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
       * Minify all javascript, switch loaders to minimizing mode
       */
      new webpack.optimize.UglifyJsPlugin(),

       /**
       * Reference: https://github.com/kevlened/copy-webpack-plugin
       * Copy assets from the public folder
       */
      new CopyWebpackPlugin([{
        from: __dirname + '/src/public'
      }])
    );
  }
  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './src/assets',
    stats: 'minimal',
    port: port
  };

  return config;
})();
