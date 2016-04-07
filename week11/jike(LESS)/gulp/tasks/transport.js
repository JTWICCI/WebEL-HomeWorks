var transport = require("gulp-seajs-transport");
var gulp = require("gulp");
var config = require('../config').transport;

gulp.task("seajs-transport",function(){
  gulp.src(config.src)
        .pipe(transport())
        .pipe(gulp.dest(config.dest));
}) 