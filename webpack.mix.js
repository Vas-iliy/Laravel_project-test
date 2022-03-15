const mix = require('laravel-mix');

/////////////////////////////////////////
mix.styles([
    'resources/assets/user/plugins/fontawesome-free/css/all.min.css',
    'resources/assets/user/plugins/select2/css/select2.css',
    'resources/assets/user/plugins/select2-bootstrap4-theme/select2-bootstrap4.css',
    'resources/assets/user/css/adminlte.min.css',
], 'public/assets/user/css/user.css');

mix.scripts([
    'resources/assets/user/plugins/jquery/jquery.min.js',
    'resources/assets/user/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'resources/assets/user/plugins/select2/js/select2.full.js',
    'resources/assets/user/plugins/bs-custom-file-input/bs-custom-file-input.js',
    'resources/assets/user/js/adminlte.min.js',
    'resources/assets/user/js/demo.js',
], 'public/assets/user/js/user.js');

mix.copyDirectory('resources/assets/user/plugins/fontawesome-free/webfonts',
    'public/assets/user/webfonts');

mix.copyDirectory('resources/assets/user/img',
    'public/assets/user/img');

mix.copy('resources/assets/user/css/adminlte.min.css.map',
    'public/assets/user/css/adminlte.min.css.map');

mix.copy('resources/assets/user/js/adminlte.min.js.map',
    'public/assets/user/js/adminlte.min.js.map');
///////////////////////////////////////////////////////////////
mix.styles([
    'resources/assets/front/css/bootstrap.css',
    'resources/assets/front/css/font-awesome.min.css',
    'resources/assets/front/style.css',
    'resources/assets/front/css/animate.css',
    'resources/assets/front/css/responsive.css',
    'resources/assets/front/css/colors.css',
    'resources/assets/front/css/version/marketing.css',
], 'public/assets/front/css/main.css')

mix.scripts([
    'resources/assets/front/js/jquery.min.js',
    'resources/assets/front/js/tether.min.js',
    'resources/assets/front/js/bootstrap.min.js',
    'resources/assets/front/js/animate.js',
    'resources/assets/front/js/custom.js',
], 'public/assets/front/js/main.js');

mix.copyDirectory('resources/assets/front/images', 'public/assets/front/images');
mix.copyDirectory('resources/assets/front/fonts', 'public/assets/front/fonts');
mix.copyDirectory('resources/assets/front/upload', 'public/assets/front/upload');

