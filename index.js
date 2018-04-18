var compress_images = require('compress-images');

var INPUT = 'src/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
var OUTPUT = 'compressed/';

compress_images(INPUT, OUTPUT
    , { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }
    , function () { }
);

var INPUT = 'compressed/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
var OUTPUT = 'compressed_2X/';

compress_images(INPUT, OUTPUT
    , { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-50'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    { gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] } }
    , function () { }
);