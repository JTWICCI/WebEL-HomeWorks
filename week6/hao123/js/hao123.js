// JavaScript Document

/*生命一个变量存放需要更改css路径的<link>标签对象*/
var themes = document.getElementById('themechoice');

/*声明一个变量存放LocalStorage的键名*/
var themekey = "themekey";

/*声明一个变量存放LocalStorage的数据*/
var storage = window.localStorage;

/*检查localStorage是否存有主题数据*/
if (storage.getItem(themekey) !== null){
	switch(storage.getItem(themekey)) { //如果有，设置相应主题
		case "green":
			themeGreen();
		break;
		case "orange":
			themeOrange();
		break;
		case "purple":
			themePurple();
		break;
		case "blue":
			themeBlue();
		break;
	}
}

/*更换绿色主题的函数*/
function themeGreen() {
	themes.href='css/themeGreen.css'; //修该css文件路径
	storage.setItem(themekey,"green"); //添加localStorage键值对
}
/*橘色主题的函数*/
function themeOrange() {
	themes.href='css/themeOrange.css';
	storage.setItem(themekey,"orange");
}
/*紫色主题的函数*/
function themePurple() {
	themes.href='css/themePurple.css';
	storage.setItem(themekey,"purple");
}
/*蓝色主题的函数*/
function themeBlue() {
	themes.href='css/themeBlue.css';
	storage.setItem(themekey,"blue");
}


/*监听绿色主题按钮*/
document.getElementById('theme-green').addEventListener('click', themeGreen);

/*监听橘色主题按钮*/
document.getElementById('theme-orange').addEventListener('click', themeOrange);

/*监听紫色主题按钮*/
document.getElementById('theme-purple').addEventListener('click', themePurple);

/*监听蓝色主题按钮*/
document.getElementById('theme-blue').addEventListener('click', themeBlue);
