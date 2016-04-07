/*
* 页面中下部分“职业路径图”、“知识体系图”、“精品课程系列”、“wiki”后面的
* 灰色问号
*/
define(function(require,exports,module){

var a = {};

var indexPage = {
	init: function() {
		this.bindEle()
	},
	bindEle: function() {
		//代理绑定所有“?”问号，分别在鼠标移上和移出时显示和隐藏问号后的介绍文字
		$("body").delegate(".way", "mouseover", this.whyWarningShow), $("body").delegate(".way", "mouseout", this.whyWarningHide)
	},
	//鼠标移上“?”时，显示介绍文字
	whyWarningShow: function() {
		//声明一个变量，存放“?”后面的元素（存放介绍文字的span标签）
		var e = $(this).next(".way-infor");
		//jQuery的stop方法停止正在运行的动画（!0是bollean的true的隐式转换）
		//jQuery的animate函数创建自定义动画，使元素从透明变成不透明，动画在400毫秒完成
		e.stop(!0, !0), e.animate({
			opacity: "1",
			marginLeft: "0px"
		}, 400)
	},
	//鼠标移出“?”时，隐藏介绍文字
	whyWarningHide: function() {
		//声明一个变量，存放“?”后面的元素（存放介绍文字的span标签）
		var e = $(this).next(".way-infor");
		//jQuery的stop方法停止正在运行的动画（!0是bollean的true的隐式转换）
		//jQuery的animate函数创建自定义动画，使元素从不透明变成透明
		e.stop(!0, !0), e.animate({
			opacity: "0",
			marginLeft: "-5px"
		}, 400)
	},
};

//执行函数

a.showmark = function() {
	indexPage.init()
};

// var a = {};
// a.doSome = function(){
// 	console.log('shit');
// }

module.exports = a;

});