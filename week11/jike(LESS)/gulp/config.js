/* gulp命令会由gulpfile.js运行，所以static和build文件夹路径如下（根目录下） */
var src = './static';     
var dest = './build';  

module.exports = {
	less: {
		all: src + "/less/**/*.less", //所有less
		src: src + "/less/*.less",	  //需要编译的less
		dest: dest + "/static/css",		  //输出目录
		settings: {					  //编译less过程需要的配置，可以为空

		}
	},
	images: {
		src: "./img/**/*",	  
		dest: dest + "/img"
	},
	js: {
		src: src + "/js/**/*",
		dest: dest + "/static/js"
	},
	html: {
		src: "./index.html",	  
		dest: dest
	},
	transport: {
		src: "./sea-modules/**/*.js",	  
		dest: dest + "/sea-modules"
	}
}