var gulp = require('gulp');

gulp.task('default', function(){
	gulp.start('less', 'imagemin', 'uglify','htmlmin','seajs-transport');
});
