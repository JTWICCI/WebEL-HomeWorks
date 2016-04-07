// JavaScript Document
//主入口文件
define(function(require,exports,module){

	//通过 require 引入依赖
	require('jquery');

	var slideShow = require('./slide_show'); //页面最上方中部的大图片轮播动画
	slideShow.topPageSlide();

	var infiniteScroll = require('./infinite_scroll'); //滑动菜单
	infiniteScroll.jobs();	 //（页面最上方中部的大图片轮播动画）下面的职业滑动菜单
	infiniteScroll.firms();	  //战略合作企业滑动菜单
	infiniteScroll.schools(); 	//“合作院校”滑动菜单
	infiniteScroll.media();   //“媒体报道”滑动菜单

	var switchMenus = require('./switch_menus'); //切换菜单
	switchMenus.miniCards();	//-登录信息下方的推荐内容 （问答、wiki、课程、社群）的响应动画
	switchMenus.weeklessons();	 //极客公开课tab切换
	switchMenus.hotnav();	//“热门推荐”、“最新课程”~“企业合作”等导航栏
	switchMenus.hotvideos();	//“热门推荐”、“最新课程”~“企业合作”等导航栏下方单个课程视频在鼠标移上去时的效果

	var decorate = require('./decorations'); //一些小部件装饰
	decorate.searchbox(); //页面头部搜索框样式(焦点状态)
	decorate.gotop();	//出现滚动条时页面右下角的“回到顶部”箭头设置

	var showmark = require('./question_mark_show');
	showmark.showmark(); //“职业路径图”、“知识体系图”、“精品课程系列”、“wiki”后面的灰色问号鼠标移上显示提示


	// 通过 exports 对外提供接口
	// exports.doSomething = ...

	// 或者通过 module.exports 提供整个接口
	// module.exports = ...
});