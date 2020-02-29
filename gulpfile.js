var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
sass.compiler = require('node-sass');
 
 //подключение sass.
	function sassfun() {
  return gulp.src('app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());

}
function watchsass1(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
     //слежу за файлами watch
        gulp.watch('app/sass/*.scss', sassfun)
        gulp.watch("./index.html").on('change', browserSync.reload);
}
gulp.task('sass',sassfun);
gulp.task('watchsass',watchsass1);
gulp.task('build',gulp.series('sass','watchsass'));