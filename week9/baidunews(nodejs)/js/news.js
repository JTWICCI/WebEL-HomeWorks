// JavaScript Document

var newsMenu = {
	init: function() {
		this.MoreBtn();
		this.LessBtn();
		this.btnActive();
	},
	// 分类菜单收起时的"更多"按钮监听
	MoreBtn: function(){
		$("#index_view_navigator .more").click(function(){
			var tabletr = $("#index_view_navigator .content table tbody tr");
			tabletr.eq(1).removeClass("last-shown-line");
			tabletr.eq(2).show();
			tabletr.eq(3).show();
			tabletr.eq(4).show();
			$("#index_view_navigator .divider.tail").show();
			$("#index_view_navigator .footer").show();
			$("#index_view_navigator .more").hide();
		});
	},
	// 分类菜单展开后的"收起"按钮监听
	LessBtn: function(){
		$("#index_view_navigator .less").click(function(){
			var tabletr = $("#index_view_navigator .content table tbody tr");
			tabletr.eq(1).addClass("last-shown-line");
			tabletr.eq(2).hide();
			tabletr.eq(3).hide();
			tabletr.eq(4).hide();
			$("#index_view_navigator .divider.tail").hide();
			$("#index_view_navigator .footer").hide();
			$("#index_view_navigator .more").show();
		});
	},
	// 菜单项选中后加下划线并清除其它下划线
	btnActive: function(){
		//页面打开后直接加载“推荐”页面内容
		loadAndPrint(1,"#tuijian_load",0); //参数1：当前页的“类别”, 参数2：要载入的DOM框架id名，参数3：点击"加载更多"的次数
		var loadmoretj = 0; //该变量存放当前内容框架里的“加载更多”按钮的点击次数
		$("#tuijian_content .ui-refresh").on('click',function(){ //监听推荐内容框架里的“加载更多”按钮
			loadmoretj++;
			if (loadmoretj < 4) { //如果点击超过4次，将不会再有数据
				loadAndPrint(1,"#tuijian_load",loadmoretj);
			} else {
				$("#tuijian_content .ui-refresh-wrapper").hide(); //没有数据了就隐藏“加载更多”按钮
				// loadmoretj = 0;
			}
		});
		//监听导航菜单的“类别按钮”：
		$("#index_view_navigator .content td").delegate("span","click",function(){
			$("#index_view_navigator .content td span").removeClass("cur"); //先全删
			$(this).addClass("cur"); //再加上下划线

			/*==========================================*/
			//根据按钮的id值显示、隐藏相应内容并作一些修改
			//根据按钮的"data-type"属性发送请求到相应接口脚本，并根据返回内容填充
			var datatype = $(this).attr("data-type"); // 声明一个变量存放data-type的值
			if (datatype !== "1") {
				var targetid = $(this).attr("id");//获取当前按钮的id属性值，为下面的统一操作提供便利
				$("#index_view_sections div:first-child").eq(0).next().attr("id",targetid+"_content");//设置该页的外层框架id
				$("#"+targetid+"_content div:first-child").eq(0).attr("id",targetid+"_load");//设置该页的内层框架id
				$("#tuijian_content").hide(); //隐藏“推荐”内容页面
				$("#"+targetid+"_content").show();
				$("#"+targetid+"_load").html(" ");//先清空当前内容框架内的内容
				loadAndPrint(datatype,"#"+targetid+"_load",0); //打印出当前类别的新闻内容
				$("#"+targetid+"_content .ui-refresh-wrapper").show(); //显示“加载更多”按钮
				//监听当前内容外层框架内的“加载更多”按钮
				var loadmore = 0; //该变量存放当前内容框架(推荐除外)里的“加载更多”按钮的点击次数
				$("#"+targetid+"_content .ui-refresh").on('click',function(){
					loadmore++;
					if (loadmore < 4) { //如果点击超过4次，将不会再有数据
						loadAndPrint(datatype,"#"+targetid+"_load",loadmore); //参数1：当前页的“类别”, 参数2：要载入的DOM框架id名，参数3：点击"加载更多"的次数
					} else {
						$("#"+targetid+"_content .ui-refresh").off(); //解除绑定加载更多按钮
						$("#"+targetid+"_content .ui-refresh-wrapper").hide(); //没有数据了就隐藏“加载更多”按钮
					}
				});
			} else {
				$("#tuijian_content").siblings().hide(); //隐藏刚刚显示的类别内容页面
				$("#tuijian_content").show(); //显示的“推荐”内容页面
			}
		});
	}
};

//执行函数
$(function() {
	newsMenu.init();
});

//“推荐”内容的最上方三张大图【轮播】动画
(function(){
	if ($(".topic-gallery-container").length > 0){ // 如果轮播图存在，执行轮播循环
		var bannerSlide = $(".topic-gallery-container .g-list");//获取外层框架
		var bannerItem = $(".topic-gallery-container .g-list .g-item"); //获取子元素集合
		var bannerItemWidth = parseFloat(bannerItem.first().css('width'));//获取单个子元素宽度
		var bannerSlideWidth = bannerItemWidth * 5; //获取框架宽度 (3个加上前后各一个一共5个)
		var n = 1;
		setInterval(function(){ //执行轮播循环
			bannerSlide.animate({ // 图片滚动动画
	            'left' : "-=" + bannerItemWidth + "px"		//向左移动整个ul
	        },300,"linear",function() {     
	        	var l = parseFloat(bannerSlide.css('left')) - 10; //获得ul的显示到了最右边（减10是为了在对比时更保险）
	        	if (l < -(bannerSlideWidth - bannerItemWidth)) {
	        		bannerSlide.css("left",-bannerItemWidth + "px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
	        	}
			});	
			if (n > 2) {n = 0;} //切换假按钮样式
			$(".topic-gallery-container .g-icons i").eq(n).addClass("cur").siblings().removeClass("cur");
			n++;
		},3000);
	}

	//将数据从服务器取出并载入“推荐”的“轮播”内容框架
	$.get('http://localhost:3900/lunboload',function(data){ //从数据库提取数据
		$("#tuijian_content .g-list .g-item").eq(0).attr("data-url",data[2].href);
		$("#tuijian_content .g-list .g-item img").eq(0).attr("src",data[2].image_src);
		$("#tuijian_content .g-list .g-item h4 span").eq(0).html(data[2].title);

		$("#tuijian_content .g-list .g-item").eq(1).attr("data-url",data[0].href);
		$("#tuijian_content .g-list .g-item img").eq(1).attr("src",data[0].image_src);
		$("#tuijian_content .g-list .g-item h4 span").eq(1).html(data[0].title);

		$("#tuijian_content .g-list .g-item").eq(2).attr("data-url",data[1].href);
		$("#tuijian_content .g-list .g-item img").eq(2).attr("src",data[1].image_src);
		$("#tuijian_content .g-list .g-item h4 span").eq(2).html(data[1].title);

		$("#tuijian_content .g-list .g-item").eq(3).attr("data-url",data[2].href);
		$("#tuijian_content .g-list .g-item img").eq(3).attr("src",data[2].image_src);
		$("#tuijian_content .g-list .g-item h4 span").eq(3).html(data[2].title);

		$("#tuijian_content .g-list .g-item").eq(4).attr("data-url",data[0].href);
		$("#tuijian_content .g-list .g-item img").eq(4).attr("src",data[0].image_src);
		$("#tuijian_content .g-list .g-item h4 span").eq(4).html(data[0].title);
    });
})();

//“推荐”内容大图轮播图下方的【滚动文字】
(function(){
	if ($(".ui-hotword").length > 0) { //如果元素存在，执行代码
		var bannerSlide = $(".ui-hotword ul");//获取外层框架
		var bannerItem = $(".ui-hotword ul li"); //获取子元素集合
		var bannerSlideHeight = parseFloat(bannerSlide.css('height')); //获取框架高度
		var bannerItemHeight = parseFloat(bannerItem.first().css('height'));//获取单个子元素高度
		setInterval(function(){
			bannerSlide.animate({ // 图片滚动动画
	            'top' : "-=" + bannerItemHeight + "px"		//向上移动整个ul
	        },300,"linear",function() {     
	        	var l = parseFloat(bannerSlide.css('top')) - 3; //获得ul的显示到了最右边（减3是为了在对比时更保险）
	        	if (l < -(bannerSlideHeight - bannerItemHeight)) {
	        		setTimeout(function(){
	        			bannerSlide.css("top","0px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
	        		},300);
	        	}
			});	
		},2500);
	}
	//将数据从服务器取出并载入“推荐”的“热门”滚动文字内容框架
	$.get('http://localhost:3900/gundongload',function(data){ //从数据库提取数据
		//第一个li放最后一条数据（因为持续的滚动动画需要）
		$(".ui-hotword ul li span").eq(0).html(data[9].title);
		//循环并依次将数据放入滚动文字内容框架
		for (var i = 0; i < 10; i++) {
			var a = i + 1;
			$(".ui-hotword ul li span").eq(a).html(data[i].title);
		}
    });
})();

//加载数据并打印到内容界面的函数
function loadAndPrint(_pageid,_tbodyid,_loadmore) {//参数1：当前页的“类别”, 参数2：要载入的DOM框架id名，参数3：点击"加载更多"的次数
    //加载从数据库读取的数据并生成数据条目
    $.post('http://localhost:3900/load',{"contentid":_pageid,"loadmore":_loadmore},function(data){
        var displaytype = "", title="", addtime="", href=""; // 定义一些变量，将存放一定存在的json数据
        for(var i=0,l=data.length;i<l;i++){  //将数据逐行打印出来
        	//定义一些变量存放可能不存在的json数据（根据展现形式的不同，存在的数据数量会有些差异）
			var tagtext="",image1_src="",image2_src="",image3_src="",discribe="";
			if (data[i].tagtype == 1){//如果有标签，提取标签值，否者默认为空
				tagtext = data[i].tagtext;
				if (_pageid !== 1) { //如果页面不是“推荐”，标签样式是蓝色边框白色背景
					tagtext = "<b class=\"tip-tag tip-strokeblue\">"+tagtext+"</b>\n";
				} else { //如果页面是“推荐”，标签样式是红色背景
					tagtext = "<b class=\"tip-hot tip-fillred\">"+tagtext+"</b>\n";
				}
			}//下面5行同上，如果有值赋值
			if (data[i].displaytype) {displaytype = data[i].displaytype;}
			if (data[i].image1_src) {image1_src = data[i].image1_src;}
			if (data[i].image2_src) {image2_src = data[i].image2_src;}
			if (data[i].image3_src) {image3_src = data[i].image3_src;}
			if (data[i].discribe) {
				discribe = data[i].discribe;
				discribe = "<div class=\"index-list-main-abs\">"+discribe+"</div>\n";
			}
			title = data[i].title;
			href = data[i].href;
            addtime = data[i].add_time; //获取从数据库提取的时间
            addtime = new Date(addtime); //变成date对象
            var currtime = new Date(); //创建当前时间的date对象
            var timegap = currtime - addtime; //将两个对象相减得到微秒数（数据添加时间与页面加载时间的微秒数）
            var timegapmsg = ""; //存放字符串“XXX(时间)前”的变量
            if (timegap < 6000000) {
            	timegap = parseInt(timegap/100000);
            	timegapmsg = timegap + "分钟前";
            } else if (timegap < 144000000) {
            	timegap = parseInt(timegap/6000000);
            	timegapmsg = timegap + "小时前";
            } else {
            	timegap = parseInt(timegap/144000000);
            	timegapmsg = timegap + "天前";
            }
            //先声明一个变量，将存放要打印的字符串
            var htmldom = ""; // 下面打印新闻内容块的dom结构：
            htmldom = "<div class=\"index-list-item\" data-src=\""+href+"\">\n";
            switch (data[i].displaytype) {
                case 1:
                	htmldom = htmldom + "<div class=\"index-list-main\">\n<div class=\"index-list-main-text\">\n<div class=\"index-list-main-title\">"+title+"</div>\n</div>\n<div class=\"index-list-album-container\">\n<div class=\"index-list-album\">\n<div class=\"index-list-album-wrapper one\">\n<img src=\""+image1_src+"\">\n</div>\n</div>\n<div class=\"index-list-album\">\n<div class=\"index-list-album-wrapper two\">\n<img src=\""+image2_src+"\">\n</div>\n</div>\n<div class=\"index-list-album\">\n<div class=\"index-list-album-wrapper three\">\n<img src=\""+image3_src+"\"></div>\n</div>\n</div>\n";
                break;
                case 2:
                	htmldom = htmldom + "<div class=\"index-list-main showleft\">\n<div class=\"index-list-image\">\n<img src=\""+image1_src+"\">\n</div>\n<div class=\"index-list-main-text\">\n<div class=\"index-list-main-title\">"+title+"</div>\n"+discribe+"</div>\n";
                break;
                case 3:
                	htmldom = htmldom + "<div class=\"index-list-main  moretext\">\n<div class=\"index-list-main-text\">\n<div class=\"index-list-main-title\">"+title+"</div>\n"+discribe+"</div>\n";
                break;
            }
            htmldom = htmldom + "<div class=\"index-list-bottom\">\n<div class=\"index-list-main-time\">\n"+tagtext+"<b class=\"tip-time\">"+timegapmsg+"</b>\n</div>\n</div>\n</div>\n</div>\n";
            //输出：
            $(_tbodyid).append(htmldom);
        }  
    });
}