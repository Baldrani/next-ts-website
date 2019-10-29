const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
module.exports = withCSS(withSass({
    webpack (config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
}));

/*
  resolve: {
    alias: {
      '@': '/Users/mael/Work/SPS/shareprintstudio-front/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/mael/Work/SPS/shareprintstudio-front/node_modules',
      '/Users/mael/Work/SPS/shareprintstudio-front/node_modules/@vue/cli-service/node_modules'
    ]
  },
 */
