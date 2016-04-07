// JavaScript Document
define(function(require,exports,module){

/*
* （页面最上方中部的大图片轮播动画）下面的职业滑动菜单
*/
var a = {};

a.jobs = function(){
	var bannerSlide = $(".focuswork-wrap ul");//获取外层框架
	var bannerItem = $(".focuswork-wrap ul li"); //获取子元素集合
	var bannerSlideWidth = $(".focuswork-wrap ul").css('width');
	var bannerItemWidth = bannerItem.first().css('width');//获取单个子元素宽度
	bannerItemWidth = "186.667px"; //这个特殊，单独重新定义值
	bannerSlideWidth = "2053.33px"; //这个特殊，单独重新定义值
	//在鼠标放上去时候显示翻页箭头
	$(".focuswork-wrap").mouseenter(function(){
		$("#work-left").fadeIn();
		$("#work-right").fadeIn();
		//鼠标在翻页箭头上时增加css样式
		$("#work-left").mouseenter(function(){
			$(this).addClass("arrow-left2");
		}).mouseleave(function(){
			$(this).removeClass("arrow-left2");
		});
		//鼠标在翻页箭头上时增加css样式
		$("#work-right").mouseenter(function(){
			$(this).addClass("arrow-right2");
		}).mouseleave(function(){
			$(this).removeClass("arrow-right2");
		});
	}).mouseleave(function(){ //鼠标移出时隐藏翻页箭头
		$("#work-left").fadeOut();
		$("#work-right").fadeOut();
	});
	//为左翻页箭头绑定鼠标点击事件
	$("#work-left").on("click",function(){
		bannerSlide.animate({
            'left' : "+=" + bannerItemWidth		//点击鼠标后向右移动整个ul
        },200,"linear",function() {
        	var l = parseFloat(bannerSlide.css('left')) + 10; //获得ul的偏移像素数（加10是为了在对比时更保险）
        	if (l > 0) {									//如果ul的显示到了最左边
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*5 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
	//为右翻页箭头绑定鼠标点击事件
	$("#work-right").on("click",function(){
		bannerSlide.animate({
            'left' : "-=" + bannerItemWidth		//点击鼠标后向左移动整个ul（减10是为了在对比时更保险）
        },200,"linear",function() {     
        	var l = parseFloat(bannerSlide.css('left')) - 10; //获得ul的显示到了最右边
        	if (l < -parseFloat(bannerItemWidth)*8) {
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*3 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
};


//战略合作企业滑动菜单
a.firms = function(){
	var bannerSlide = $("#enterprise .learnbox .strategy .startegy-box .swiper-container .swiper-wrapper");//获取外层框架
	var bannerItem = bannerSlide.children("a"); //获取子元素集合
	var bannerSlideWidth = bannerSlide.css('width');
	var bannerItemWidth = bannerItem.first().css('width');//获取单个子元素宽度
	bannerItemWidth = "159.667px"; //这个特殊，单独重新定义值

	//在鼠标放上去时候显示翻页箭头
	$("#enterprise .learnbox .strategy").mouseenter(function(){
		$("#banner-left3").fadeIn();
		$("#banner-right3").fadeIn();
	}).mouseleave(function(){ //鼠标移出时隐藏翻页箭头
		$("#banner-left3").fadeOut();
		$("#banner-right3").fadeOut();
	});
	//为左翻页箭头绑定鼠标点击事件
	$("#banner-left3").on("click",function(){
		bannerSlide.animate({
            'left' : "+=" + bannerItemWidth		//点击鼠标后向右移动整个ul
        },200,"linear",function() {
        	var l = parseFloat(bannerSlide.css('left')) + 10; //获得ul的偏移像素数（加10是为了在对比时更保险）
        	if (l > 0) {									//如果ul的显示到了最左边
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*21 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
	//为右翻页箭头绑定鼠标点击事件
	$("#banner-right3").on("click",function(){
		bannerSlide.animate({
            'left' : "-=" + bannerItemWidth		//点击鼠标后向左移动整个ul（减10是为了在对比时更保险）
        },200,"linear",function() {     
        	var l = parseFloat(bannerSlide.css('left')) - 10; //获得ul的显示到了最右边
        	if (l < -parseFloat(bannerItemWidth)*27) {
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*6 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
};



//“合作院校”滑动菜单
a.schools = function(){
	var bannerSlide = $("#university .learnbox .swiper-car-box .swiper-container .swiper-wrapper");//获取外层框架
	var bannerItem = bannerSlide.children("a"); //获取子元素集合
	var bannerSlideWidth = bannerSlide.css('width');
	var bannerItemWidth = bannerItem.first().css('width');//获取单个子元素宽度
	bannerSlideWidth = "3695.14px"; //这个特殊，单独重新定义值
	bannerItemWidth = "136.857px"; //这个特殊，单独重新定义值

	//在鼠标放上去时候显示翻页箭头
	$("#university .learnbox .swiper-car-box").mouseenter(function(){
		$("#banner-left2").fadeIn();
		$("#banner-right2").fadeIn();
	}).mouseleave(function(){ //鼠标移出时隐藏翻页箭头
		$("#banner-left2").fadeOut();
		$("#banner-right2").fadeOut();
	});
	//为左翻页箭头绑定鼠标点击事件
	$("#banner-left2").on("click",function(){
		bannerSlide.animate({
            'left' : "+=" + bannerItemWidth		//点击鼠标后向右移动整个ul
        },200,"linear",function() {
        	var l = parseFloat(bannerSlide.css('left')) + 10; //获得ul的偏移像素数（加10是为了在对比时更保险）
        	if (l > 0) {									//如果ul的显示到了最左边
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*13 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
	//为右翻页箭头绑定鼠标点击事件
	$("#banner-right2").on("click",function(){
		bannerSlide.animate({
            'left' : "-=" + bannerItemWidth		//点击鼠标后向左移动整个ul（减10是为了在对比时更保险）
        },200,"linear",function() {     
        	var l = parseFloat(bannerSlide.css('left')) - 10; //获得ul的显示到了最右边
        	if (l < -parseFloat(bannerItemWidth)*20) {
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*7 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
};

//“媒体报道”滑动菜单
a.media = function(){
	var bannerSlide = $("#mediareport .strategy2 .startegy-box .swiper-container .swiper-wrapper");//获取外层框架
	var bannerItem = bannerSlide.children("a"); //获取子元素集合
	var bannerSlideWidth = bannerSlide.css('width');
	var bannerItemWidth = bannerItem.first().css('width');//获取单个子元素宽度
	bannerSlideWidth = "4151.33px"; //这个特殊，单独重新定义值
	bannerItemWidth = "159.667px"; //这个特殊，单独重新定义值

	//在鼠标放上去时候显示翻页箭头
	$("#mediareport .strategy2 .startegy-box").mouseenter(function(){
		$("#banner-left4").fadeIn();
		$("#banner-right4").fadeIn();
	}).mouseleave(function(){ //鼠标移出时隐藏翻页箭头
		$("#banner-left4").fadeOut();
		$("#banner-right4").fadeOut();
	});
	//为左翻页箭头绑定鼠标点击事件
	$("#banner-left4").on("click",function(){
		bannerSlide.animate({
            'left' : "+=" + bannerItemWidth		//点击鼠标后向右移动整个ul
        },200,"linear",function() {
        	var l = parseFloat(bannerSlide.css('left')) + 10; //获得ul的偏移像素数（加10是为了在对比时更保险）
        	if (l > 0) {									//如果ul的显示到了最左边
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*14 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
	//为右翻页箭头绑定鼠标点击事件
	$("#banner-right4").on("click",function(){
		bannerSlide.animate({
            'left' : "-=" + bannerItemWidth		//点击鼠标后向左移动整个ul（减10是为了在对比时更保险）
        },200,"linear",function() {     
        	var l = parseFloat(bannerSlide.css('left')) - 10; //获得ul的显示到了最右边
        	if (l < -parseFloat(bannerItemWidth)*20) {
        		bannerSlide.css("left",-parseFloat(bannerItemWidth)*6 + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
        	}
		});	
	});
};

module.exports = a;

});