const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');

//Compilacion del SASS

function scss(){
    return src('src/scss/app.scss')
    .pipe( sass())
    .pipe( dest('./build/css'));
}

function watchArchivos(){
    watch('src/scss/**/*.scss', scss);
}



exports.default = series(scss, watchArchivos);