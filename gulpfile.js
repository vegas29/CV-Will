const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilidades

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


//Compilacion del SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*'
}

function scss(){
    return src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe( sass())
    .pipe( postcss( [autoprefixer(), cssnano()]))
    .pipe( sourcemaps.write('.'))
    .pipe( dest('./build/css'));
}

function javascript(){
    return src(paths.js)
    .pipe(sourcemaps.init())
    .pipe( concat('bundle.js'))
    .pipe( terser())
    .pipe( sourcemaps.write('.'))
    .pipe( rename({ suffix: '.min'}))
    .pipe( dest('./build/js'))
}

function imagenesWebp(){
    return src(paths.imagenes)
    .pipe( webp())
    .pipe( dest('./build/img'))
}

function imagenes(){
    return src(paths.imagenes)
    .pipe( imagemin())
    .pipe( dest('./build/img'))
}

function watchArchivos(){
    watch(paths.scss, scss);
}



exports.default = series(scss, imagenes, imagenesWebp, javascript, watchArchivos);