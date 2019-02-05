const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.tsx', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
       module: {
           rules: [
               // We're registering the TypeScript loader here. It should only
               // apply when we're dealing with a `.ts` or `.tsx` file.
               {
                   test: /\.tsx?$/,
                   loader: 'ts-loader',
                   exclude: /node_modules/,
               },
           ],
       },

       resolve: {
           // We need to register the `.ts` extension so Webpack can resolve
           // TypeScript modules without explicitly providing an extension.
           // The other extensions in this list are identical to the Mix
           // defaults.
           extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
       },
   }).version();
