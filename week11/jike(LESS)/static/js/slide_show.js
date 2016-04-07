// JavaScript Document
define(function(require,exports,module){
var a = {};
// 页面最上方中部的大图片轮播动画
a.topPageSlide = function(){
	var slideShow = $(".banner-box"),//获取外层框架的名称
		slideBox = $("#slidebox"), //获取容纳所有图片的超长图片容器
		slidebtn = slideShow.find(".pagination span");//获取轮播选页按钮
	var slideSwitch = true; //控制轮播的开关，默认开，如果鼠标悬停，就关闭开关
	var leftScroll = false;
	var timer = null; //定时器返回值，主要用于关闭定时器
	var iNow = 0; //iNow为正在展示的图片的索引值，打开网页是首先显示第一张图，即索引0
	var slideTrans = [0,-560,-1120,-1680,-2240,-2800,-3360,-3920]; //声明一个存放每个图片对应位移位置的数组

	//为每个按钮绑定一个点击事件
	slidebtn.on("click",function(){ //为每个按钮绑定一个点击事件
		//按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
		$(this).addClass("swiper-visible-switch swiper-active-switch").siblings().removeClass("swiper-visible-switch swiper-active-switch");
		var index = $(this).index(); //获取哪个按钮被点击，也就是找到被点击的按钮的索引值
		
		var transformstr = ""; //存放动画字符串的变量
		var slideBoxCss = "width: 4480px; height: 260px; "; //存放动画字符串的变量

		//检查是不是从最后一张图回到第一张图（为了实现无缝动画做处理）
		if (index == 0 && iNow == 0 && leftScroll == false) { //如果是，则先继续轮播到假的第一张，再悄悄回到真的第一张
			transformstr = "transform: translate3d(" + slideTrans[7] + "px, 0px, 0px); transition-duration: 1s";
			slideBoxCss = slideBoxCss  + transformstr;
			slideBox.attr("style",slideBoxCss);
			// 为等待上面的动画，延迟1秒执行
			setTimeout(function(){
				//悄悄的回到起点
				slideBox.attr("style","width: 4480px; height: 260px; left: 0;");
			},1000);
		} else {
			transformstr = "transform: translate3d(" + slideTrans[index] + "px, 0px, 0px); transition-duration: 1s";
			slideBoxCss = slideBoxCss  + transformstr;
			//改变轮播图框架的css样式（使图片左右滑动）
			slideBox.attr("style",slideBoxCss);	
			leftScroll = false;
		}
		iNow = index; //如果手动点击按钮改变正在展示的图片的索引值
	});

	//监听大轮播图，在鼠标放上去时候显示翻页箭头
	slideShow.mouseenter(function(){
		$("#banner-left").fadeIn();
		$("#banner-right").fadeIn();
		slideSwitch = false; //停止轮播
		//监听左翻箭头
		$("#banner-left").mouseenter(function(){
			$(this).addClass("arrow-left2"); //鼠标悬停加样式
		}).mouseleave(function(){
			$(this).removeClass("arrow-left2");
		});
		//监听右翻箭头
		$("#banner-right").mouseenter(function(){
			$(this).addClass("arrow-right2"); //鼠标悬停加样式
		}).mouseleave(function(){
			$(this).removeClass("arrow-right2");
		});
		
	}).mouseleave(function(){
		$("#banner-left").fadeOut();
		$("#banner-right").fadeOut();
		slideSwitch = true;
	});
	// 监听左翻页箭头的click事件
	$("#banner-left").click(function(){ //点击翻页按钮
		leftScroll = true; 
		if (iNow != 0) {
			iNow--;
			slidebtn.eq(iNow).trigger("click"); //间接点击相应的那一页
		} else {
			iNow = 6;
			slidebtn.eq(iNow).trigger("click"); //间接点击相应的那一页
		}
	});
	// 监听右翻页箭头的click事件
	$("#banner-right").click(function(){ //点击翻页按钮
		if (iNow != 6) {
			iNow++;
			slidebtn.eq(iNow).trigger("click"); //间接点击相应的那一页
		} else {
			iNow = 0;
			slidebtn.eq(iNow).trigger("click"); //间接点击相应的那一页
		}
	});

	//自动轮播
	timer = setInterval(function(){
		if (slideSwitch) { //如果轮播开关开着(鼠标没在上面)
				iNow++;		//让图片的索引值次序加1，这样就可以实现顺序轮播图片
			if(iNow > 6){	//当到达最后一张图片的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
				iNow = 0;
			}
			slidebtn.eq(iNow).trigger("click"); //模拟出翻、选页按钮
		}
	},5000); //轮播时间为5秒
	
};

module.exports = a;

});