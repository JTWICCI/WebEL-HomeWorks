// JavaScript Document
define(function(require,exports,module){

var a = {};

//-登录信息下方的推荐内容 （问答、wiki、课程、社群）的响应动画
a.miniCards = function(){
	$(".start-list .recommend-move-event").mouseenter(function(){ //鼠标移入（问答、wiki、课程、社群）
		$(".start-list").hide();	
		$(".move-list").show();
	});
	$(".move-list").mouseleave(function(){	//鼠标移出（问答、wiki、课程、社群）
		$(".start-list").show();
		$(".move-list").hide();
	});

	//代理绑定监听鼠标移入（问答、wiki、课程、社群）后的每个菜单项
	$(".move-list .type-list").delegate("li","mouseover",function(){
		$(this).addClass("active").siblings().removeClass("active"); //给鼠标悬停的菜单项添加样式，并去掉其他菜单项的样式
		var n = $(this).index(); //获取菜单项的索引，为了显示和隐藏下面相应菜单项的内容作判断用
		switch (n) {
			case 0:
				$(".move-list .content .question").show(); //不知道为什么 $("#recommendWiki").hide().siblings().show(); 这么些不行
				$("#recommendWiki ul").hide();
				$("#recommendLession ul").hide();
				$("#recommendGroup ul").hide();
			break;
			case 1:
				$(".move-list .content .question").hide();
				$("#recommendWiki ul").show();
				$("#recommendLession ul").hide();
				$("#recommendGroup ul").hide();
			break;
			case 2:
				$(".move-list .content .question").hide();
				$("#recommendWiki ul").hide();
				$("#recommendLession ul").show();
				$("#recommendGroup ul").hide();
			break;
			case 3:
				$(".move-list .content .question").hide();
				$("#recommendWiki ul").hide();
				$("#recommendLession ul").hide();
				$("#recommendGroup ul").show();
			break;
		}
	});
};


//极客公开课tab切换
a.weeklessons = function(){
	//监听“极客公开课”星期的tab菜单
	$(".livebox ul").delegate("li","mouseover",function(){ //为所有菜单项代理绑定鼠标悬停事件
		$(this).addClass("weekactive").siblings().removeClass("weekactive");
		var n = $(this).index(); //获取当前鼠标悬停的菜单项的索引（第n个减一）
		var lessonContents = $(".livebox-lesson .livebox-lesson-list"); //获取菜单项下的内容容器集合
		switch (n) { //判断鼠标悬停在第几个菜单项就对相应的内容容器添加样式以显示，并去除其他项的样式以隐藏
			case 0:
				lessonContents.eq(n).addClass("lessonshow").siblings().removeClass("lessonshow");
			break;
			case 1:
				lessonContents.eq(n).addClass("lessonshow").siblings().removeClass("lessonshow");
			break;
			case 2:
				lessonContents.eq(n).addClass("lessonshow").siblings().removeClass("lessonshow");
			break;
			case 3:
				lessonContents.eq(n).addClass("lessonshow").siblings().removeClass("lessonshow");
			break;
			case 4:
				lessonContents.eq(n).addClass("lessonshow").siblings().removeClass("lessonshow");
			break;
		}
	});
};



//“热门推荐”、“最新课程”~“企业合作”等导航栏、以及下方相应的内容
a.hotnav = function(){
	$(".hot-lesson ul").delegate("li","mouseover",function(){	//为所有菜单项代理绑定鼠标悬停事件
		$(this).addClass("on").siblings().removeClass("on");
		var n = $(this).index(); //获取当前鼠标悬停的菜单项的索引（第n个减一）
		var fivelessonBoxes = $("#fivelesson .one-classfiy-lesson"); //获取“热门推荐”之外的5个菜单项外层框架
		switch (n) {
			case 0:
				$("#hot-lessonbox div:first-child").show();
				fivelessonBoxes.eq(0).hide().siblings().hide();
			break;
			case 1:
				$("#hot-lessonbox div:first-child").eq(0).hide();
				fivelessonBoxes.eq(0).show().siblings().hide();
			break;
			case 2:
				$("#hot-lessonbox div:first-child").eq(0).hide();
				fivelessonBoxes.eq(1).show().siblings().hide();
			break;
			case 3:
				$("#hot-lessonbox div:first-child").eq(0).hide();
				fivelessonBoxes.eq(2).show().siblings().hide();
			break;
			case 4:
				$("#hot-lessonbox div:first-child").eq(0).hide();
				fivelessonBoxes.eq(3).show().siblings().hide();
			break;
			case 5:
				$("#hot-lessonbox div:first-child").eq(0).hide();
				fivelessonBoxes.eq(4).show().siblings().hide();
			break;

		}
	});
};


//“热门推荐”、“最新课程”~“企业合作”等导航栏下方单个课程视频在鼠标移上去时的效果
a.hotvideos = function(){
	var lessonVideoBox = $(".one-classfiy-lesson ul"); //获得每个视频展示块的最外层ul框架

	lessonVideoBox.delegate("li","mouseenter",function(){
		//获得每个视频展示块的视频部分透明的“播放按钮”图片，因为层级较深，所以依次自赋值获得
		var lessonplay = $(this).children(".lessonimg-box");
		lessonplay = lessonplay.children("a");
		lessonplay = lessonplay.children(".lessonplay");
		lessonplay.animate({opacity:1},500);//将透明度设为1（不透明）

		var lessonInfo = $(this).children(".lesson-infor"); //获得每个视频展示块的视频下方文字介绍部分的外层框架
		lessonInfo.addClass("lesson-hover");
		lessonInfo.animate({height:'175px'},500);	//鼠标离开时改回文字介绍部分的高度
		lessonInfo.find("p").show();
		lessonInfo.find("p").animate({
			height: "52px",
			opacity: 1
		},300);
		//显示视频是“初级”“中级”的icon和字样，由于层级较深，直接通过节点一行解决
		lessonInfo.context.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.style.display = "block";
		//显示视频学习人数，由于层级较深，直接通过节点一行代码解决
		lessonInfo.context.lastElementChild.lastElementChild.firstElementChild.lastElementChild.style.display = "block";
		//修正右下角的icon位置
		lessonInfo.context.lastElementChild.lastElementChild.lastElementChild.firstElementChild.style.bottom = "-2px";
	});

	lessonVideoBox.delegate("li","mouseleave",function(){
		//获得每个视频展示块的视频部分透明的“播放按钮”图片，因为层级较深，所以依次自赋值获得
		var lessonplay = $(this).children(".lessonimg-box");
		lessonplay = lessonplay.children("a");
		lessonplay = lessonplay.children(".lessonplay");
		lessonplay.animate({opacity:0},500);//将透明度设为1（不透明）

		var lessonInfo = $(this).children(".lesson-infor"); //获得每个视频展示块的视频下方文字介绍部分的外层框架
		lessonInfo.removeClass("lesson-hover");
		lessonInfo.animate({height:'88px'},500);	//鼠标离开时改回文字介绍部分的高度

		lessonInfo.find("p").animate({
			height: "0px",
			opacity: 0,
			display: "none"
		},500);
		//隐藏视频是“初级”“中级”的icon和字样，由于层级较深，直接通过节点一行解决
		lessonInfo.context.lastElementChild.lastElementChild.firstElementChild.firstElementChild.lastElementChild.style.display = "none";
		//隐藏视频学习人数，由于层级较深，直接通过节点一行解决
		lessonInfo.context.lastElementChild.lastElementChild.firstElementChild.lastElementChild.style.display = "none";
		//鼠标移出后再次修正回右下角的icon位置
		lessonInfo.context.lastElementChild.lastElementChild.lastElementChild.firstElementChild.style.bottom = "4px";
	});
};

module.exports = a;

});