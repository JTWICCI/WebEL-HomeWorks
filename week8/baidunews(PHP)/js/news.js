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
	// 同时根据不同的类型(按钮)发送相应请求
	btnActive: function(){
		$("#index_view_navigator .content td").delegate("span","click",function(){
			$("#index_view_navigator .content td span").removeClass("cur"); //先全删
			$(this).addClass("cur"); //再加上下划线

			/*==========================================*/
			//根据按钮的"data-href"属性发送请求到相应php脚本，并根据返回内容修改DOM结构
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
	        		bannerSlide.css("top","0px"); //不做动画，默默地将ul偏移到ul中间相同显示的位置
	        	}
			});	
		},2500);
	}
})();

var limittj = 5;
var limitbj = 5;
//监听"推荐"、"百家'按钮
(function(){
	
	// 页面载入时先执行载入一次
	$("#tuijian_load").load("feed/tuijian.php",{limit: 5});
	$("#tuijian").on('click',function(){
		$("#baijia_content").hide();
		$("#tuijian_content").show();
		$("#tuijian_load").load("feed/tuijian.php",{limit: 5});
	});

	//监听"百家'按钮
	$("#baijia").on('click',function(){
		$("#tuijian_content").hide();
		$("#baijia_content").show();
		$("#baijia_load").load("feed/baijia.php",{limit: 5});
	});
	
	//监听"推荐'下的“加载更多”按钮
	$("#tuijian_content .ui-refresh").on('click',function(){
		limittj = limittj + 5;
		if (limittj < 21) {
			$("#tuijian_load").load("feed/tuijian.php",{limit: limittj});
		} else {
			$("#tuijian_content .ui-refresh-wrapper").hide();
		}
		
	});
	
	//监听"百家'下的“加载更多”按钮
	$("#baijia_content .ui-refresh").on('click',function(){
		limitbj = limitbj + 5;
		if (limitbj < 21) {
			$("#baijia_load").load("feed/baijia.php",{limit: limitbj});
		} else {
			$("#baijia_content .ui-refresh-wrapper").hide();
		}
	});

})();
