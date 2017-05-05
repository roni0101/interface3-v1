var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync');

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('app/*.html', browserSync.reload);
	
	gulp.watch('./app/assets/scss/**/*.scss', ['sass']);

});


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})



gulp.task('sass', function () {
  return gulp.src('./app/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'watch']);