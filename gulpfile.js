var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var path = require('path');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('less', function () {
	gulp.src('./less/*.less')
		.pipe(plumber()) // better error handling
		.pipe(less())
		.pipe(prefix("last 1 version", "> 0.5%", "ie 8"))
		.pipe(gulp.dest('./css'))
		.pipe(livereload({ start: true }));

	gulp.src('./week-*/*.less')
		.pipe(plumber()) // better error handling
		.pipe(less())
		.pipe(prefix("last 1 version", "> 0.5%", "ie 8"))
		.pipe(gulp.dest(function(file) {
			return file.cwd;
		}))
		.pipe(livereload({ start: true }));
});

gulp.task('watch', function() {
    gulp.watch('./**/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['less', 'watch']); // Default will run the 'entry' watch task

//Big TODO: index LESS files for @import statements and trigger less on only affected dependencies.