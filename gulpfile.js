const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const twig = require('gulp-twig');

const scssFiles = 'src/scss/**/*.scss';
const cssDest = 'dist/css/';

const jsFiles = 'src/scripts/**/*.js';
const jsDest = 'dist/js/';

const twigFiles = 'src/views/!(_*).twig';
const htmlDest = 'dist/';

function compileSass() {
    return gulp.src(scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
}

function compileJs() {
    return gulp.src(jsFiles)
        .pipe(concat('main.js'))            
        .pipe(gulp.dest(jsDest));  
}

function compileTwig() {
    return gulp.src(twigFiles)
        .pipe(twig({}))
        .pipe(gulp.dest(htmlDest));
}

function watchFiles() {
    gulp.watch(scssFiles, compileSass);
    gulp.watch(jsFiles, compileJs);
    gulp.watch(twigFiles, compileTwig);
}

exports.default = gulp.series(
    gulp.parallel(compileSass, compileJs, compileTwig),
    watchFiles
);