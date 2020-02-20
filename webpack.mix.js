const mix = require('laravel-mix');

mix.js('src/scripts/app.js', 'dist/js');
mix.sass('src/scss/app.scss', 'dist/css');