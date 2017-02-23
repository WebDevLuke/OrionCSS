/*
|--------------------------------------------------------------------
| SET DEPENDENCIES
|--------------------------------------------------------------------
*/

// Required for all tasks
const gulp = require('gulp');
// Required for SASS compile
const sass = require('gulp-sass');
// Adds support for SASS globbing
const sassGlob = require('gulp-sass-glob');


/*
|--------------------------------------------------------------------
|  SASS
|--------------------------------------------------------------------
*/

// Compile SASS, add autoprefixer and filter out unused CSS styles
// That way we can have unlimited utility classes and only have the ones we're actually using in our compiled CSS file
// We also tell uncss to ignore styles with stateful modifiers as these are typically added into the DOM dynamically which UNCSS is unable to detect
gulp.task('build', function () {
	return gulp.src('test/test.main.scss')
	.pipe(sassGlob())
	.pipe(sass({outputStyle: 'expanded', precision: 8}).on('error', sass.logError))
	.pipe(gulp.dest('test/'))
});

// WATCH FUNCTION
gulp.task("watch", function() {
	// SASS
	gulp.watch('**/*.scss', ['build']);
});