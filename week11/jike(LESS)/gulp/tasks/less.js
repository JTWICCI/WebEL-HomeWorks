var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').less;
var concatCss = require('gulp-concat-css');
var minify = require('gulp-minify-css');

gulp.task('less', function(){
	return gulp.src(config.src)        //less源文件
		.pipe(less(config.settings))   //执行编译
		.pipe(concatCss("index.css"))
		.pipe(minify())
		.pipe(gulp.dest(config.dest))  //输出目录
});
