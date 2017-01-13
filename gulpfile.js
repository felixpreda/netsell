var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var watch = require('gulp-watch');

gulp.task('css', function(){
  gulp.src('./assets/src/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/dist/'))
});

gulp.task('watch', function() {
  gulp.watch('./assets/src/*.less' , ['css']);
});

gulp.task('default', [ 'css', 'watch' ]);
