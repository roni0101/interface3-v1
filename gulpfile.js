var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('watch', function () {
	
	gulp.watch('./app/assets/scss/**/*.scss', ['sass']);

});


gulp.task('sass', function () {
  return gulp.src('./app/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('default', ['sass', 'watch']);