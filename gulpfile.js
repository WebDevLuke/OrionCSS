//--------------------------------------------------------------------------------------------------------------------------------------
// SET DEPENDENCIES
//--------------------------------------------------------------------------------------------------------------------------------------

// Required for all tasks
const gulp = require('gulp');
// Required for SASS compile
const sass = require('gulp-sass');
// Adds support for SASS globbing
const sassGlob = require('gulp-sass-glob');
// Used to lint SASS
const gulpStylelint = require('gulp-stylelint');


//--------------------------------------------------------------------------------------------------------------------------------------
// PRODUCTION FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------

// Build function to compile SASS
gulp.task('build', function () {
	return gulp.src('test/test.main.scss')
	.pipe(sassGlob())
	.pipe(sass({outputStyle: 'expanded', precision: 8}).on('error', sass.logError))
	.pipe(gulp.dest('test/'))
});

// Watch function to compile SASS
gulp.task("watch", function() {
	// SASS
	gulp.watch('**/*.scss', ['build']);
});

// Lint SASS Task
gulp.task('sass-lint', function lintCssTask() {
	return gulp.src('**/*.scss')
	.pipe(gulpStylelint({
		failAfterError: true,
		reportOutputDir: 'test/reports/',
		reporters: [{
			formatter: 'verbose',
			console: true,
			save: 'report.txt'
		}]
	}));
});