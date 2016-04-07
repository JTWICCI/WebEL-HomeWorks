var uglify = require('gulp-uglify');
var gulp = require('gulp');
var config = require('../config').js;

gulp.task('uglify', function(){
	var configer = {
        mangle: {except: ['define', 'require', 'module', 'exports']},
        compress: false
    };
	return gulp.src(config.src)
		.pipe(uglify(configer))
		.pipe(gulp.dest(config.dest));
});