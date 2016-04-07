// JavaScript Document
/* 百度首页交互JS */

/*右侧下拉侧栏的显示与隐藏*/
$(document).ready(function(){
	$('#morepro, #moreprolist').mouseover(function(){
		$("#moreprolist").show();
	}).mouseout(function(){
		$("#moreprolist").hide();
	});
});

/*学习jQuery后的代码（实现背景和搜索框下的菜单切换）*/

/*以下是搜索框下的菜单切换内容***************************************************************/
var myinterest; /*声明变量为绑定“我的关注”按钮*/
var recommend;	/*声明变量为绑定“推荐”按钮*/
var webnav;		/*声明变量为绑定“导航”按钮*/
var videos;		/*声明变量为绑定“视频”按钮*/
var shopping;	/*声明变量为绑定“购物”按钮*/

$(document).ready(function(){
	myinterest = $("#s_menu_mine");	/*绑定“我的关注”按钮*/
	recommend = $("#recommend");		/*绑定“推荐”按钮*/
	webnav = $("#webnav");			/*绑定“导航”按钮*/
	videos = $("#videos");		/*绑定“视频”按钮*/
	shopping = $("#shopping");		/*绑定“购物”按钮*/
	/*为按钮点击绑定函数*/
	$("#s_menu_mine").click(myinterestActivate);
	$("#recommend").click(recommendActivate);
	$("#webnav").click(webnavActivate);
	$("#videos").click(videosActivate);
	$("#shopping").click(shoppingActivate);
});

/*“我的关注”按钮激活函数*/
function myinterestActivate() {
	/*改变按钮css样式*/
	myinterest.addClass("current");
	recommend.removeClass("current");
	webnav.removeClass("current");
	videos.removeClass("current");
	shopping.removeClass("current");
	/*设置相关内容的显示与隐藏*/
	$("#s_menu_mine_c").show(); /*“我的关注”外层容器*/
	$("#recommend_c").hide();	/*“推荐”最外层容器*/
	$("#webnav_c").hide();	/*“导航”最外层容器*/
	$("#videos_c").hide();	/*“视频”最外层容器*/
	$("#shopping_c").hide();	/*“购物”最外层容器*/
}
/*“推荐”按钮激活函数*/
function recommendActivate() {
	/*改变按钮css样式*/
	myinterest.removeClass("current");
	recommend.addClass("current");
	webnav.removeClass("current");
	videos.removeClass("current");
	shopping.removeClass("current");
	/*设置相关内容的显示与隐藏*/
	$("#s_content_100").hide(); /*“我的关注”外层容器*/
	$("#s_content_2").show();	/*“推荐”最外层容器*/
	$("#s_content_1").hide();	/*“导航”最外层容器*/
	$("#s_content_15").hide();	/*“视频”最外层容器*/
	$("#s_content_5").hide();	/*“购物”最外层容器*/
}
/*“导航”按钮激活函数*/
function webnavActivate() {
	/*改变按钮css样式*/
	myinterest.removeClass("current");
	recommend.removeClass("current");
	webnav.addClass("current");
	videos.removeClass("current");
	shopping.removeClass("current");
	/*设置相关内容的显示与隐藏*/
	$("#s_content_100").hide(); /*“我的关注”外层容器*/
	$("#s_content_2").hide();	/*“推荐”最外层容器*/
	$("#s_content_1").show();	/*“导航”最外层容器*/
	$("#s_content_15").hide();	/*“视频”最外层容器*/
	$("#s_content_5").hide();	/*“购物”最外层容器*/
}
/*“视频”按钮激活函数*/
function videosActivate() {
	/*改变按钮css样式*/
	myinterest.removeClass("current");
	recommend.removeClass("current");
	webnav.removeClass("current");
	videos.addClass("current");
	shopping.removeClass("current");
	/*设置相关内容的显示与隐藏*/
	$("#s_content_100").hide(); /*“我的关注”外层容器*/
	$("#s_content_2").hide();	/*“推荐”最外层容器*/
	$("#s_content_1").hide();	/*“导航”最外层容器*/
	$("#s_content_15").show();	/*“视频”最外层容器*/
	$("#s_content_5").hide();	/*“购物”最外层容器*/
}
/*“购物”按钮激活函数*/
function shoppingActivate() {
	/*改变按钮css样式*/
	myinterest.removeClass("current");
	recommend.removeClass("current");
	webnav.removeClass("current");
	videos.removeClass("current");
	shopping.addClass("current");
	/*设置相关内容的显示与隐藏*/
	$("#s_content_100").hide(); /*“我的关注”外层容器*/
	$("#s_content_2").hide();	/*“推荐”最外层容器*/
	$("#s_content_1").hide();	/*“导航”最外层容器*/
	$("#s_content_15").hide();	/*“视频”最外层容器*/
	$("#s_content_5").show();	/*“购物”最外层容器*/
}


/*以下是背景更换内容***************************************************************/
var themekey = "themekey";//声明一个变量存放LocalStorage的键名
var bgimgsrc;	//声明一个变量，将存放鼠标选中或悬停的图片地址
$(document).ready(function(){
	//监听“换肤”按钮，如果点击显示换肤界面
	$("#theme_change").click(function(){
		$("#s_skin_layer").show();
		$("#s_skin_layer_shadow").show();//显示皮肤界面显示时的覆盖页面层
	});

	//监听“收起”按钮，如果点击隐藏换肤界面
	$("#hide_theme").click(function(){
		$("#s_skin_layer").hide();
		$("#s_skin_layer_shadow").hide();//隐藏皮肤界面显示时的覆盖页面层
	});
	//监听皮肤界面显示时的覆盖页面层，鼠标移出皮肤界面点击隐藏皮肤界面
	$("#s_skin_layer_shadow").click(function(){
		$("#s_skin_layer").hide();
		$("#s_skin_layer_shadow").hide();//隐藏皮肤界面显示时的覆盖页面层
	});

	//鼠标在图片上方时在“背景皮肤效果预览”里显示效果
	$(".skin-img-list").delegate("li","mouseover",function(){
		bgimgsrc = $(this).context.firstChild.currentSrc; //得到当前鼠标所在的图片的路径
		$("#s_skin_preview_view").removeClass("preview-nobg");
		$("#s_skin_preview_view").addClass("preview-whitelogo");//这行和上行把预览里的百度logo变成白色
		//增加“背景皮肤效果预览”的背景图片链接
		$("#s_skin_preview_skin").attr("src",bgimgsrc);
	});

	//鼠标点击选择的主题图片后图片上打钩并更改主题样式
	$(".skin-img-list").delegate("li","click",function(){
		bgimgsrc = $(this).context.firstChild.currentSrc; //得到当前鼠标所在的图片的路径
		//添加一个类名以显示选中图片右下角的绿钩钩
		$(this).addClass("choose-li").siblings().removeClass('choose-li');//显示当前选中的钩钩同时去掉其他钩钩
		//显示不使用皮肤按钮
		$("#unselect_theme").show();
		//处理图片路径字符串，改成大图片路径（去掉“_plus”字符串）
		bgimgsrc = bgimgsrc.replace("_plus","");
		//改变皮肤背景图片
		$("#skin_container").attr({style: "background-color:#404040;background-image:url('"+bgimgsrc+"');"});
		//给页面最外层容器追加一个class（表示有主题背景了）
		$("#wrapper").addClass("s-skin-hasbg");
		//再追加一个class（透明度）
		$("#wrapper").addClass("s-opacity-90");
		//改变百度logo图片路径
		$("#logoimg").attr("src","img/logo_white.png");

		//添加localStorage键值对
		storage.setItem(themekey,bgimgsrc); 
	});

	//监听“不使用皮肤”按钮,鼠标悬停时改变颜色
	$("#unselect_theme").mouseover(function(){
		$(this).addClass("is-hover");
	}).mouseout(function(){
		$(this).removeClass("is-hover");
	});
	//选择主题后监听“不使用皮肤”按钮，并在点击时去掉主题样式
	$("#unselect_theme").on("click",function(){
		$("#s_skin_preview_view").removeClass("preview-whitelogo");
		$("#s_skin_preview_view").addClass("preview-nobg");//这行和上行把预览里的百度logo改回原样
		$(".skin-img-list li").removeClass('choose-li'); //去掉之前选中图片的绿钩钩
		//去掉皮肤背景图片
		$("#skin_container").attr({style: "background:none;"});
		//去掉页面最外层容器追加的class
		$("#wrapper").removeClass("s-skin-hasbg");
		//去掉追加的一个class（透明度）
		$("#wrapper").removeClass("s-opacity-90");
		//改回百度logo图片路径
		$("#logoimg").attr("src","img/bd_logo1.png");

		//修改localStorage键值对
		storage.setItem(themekey,"notheme");
	});
});


/*出现滚动条时页面右下角的“回到顶部”标签设置*/
$(document).ready(function(){
	//当滚动条的位置处于距顶部100像素以下时，“回到顶部”出现，否则消失
	$(window).scroll(function(){
		if ($(window).scrollTop()>400){  
            $("#s_top_feed").fadeIn(1000);  
        }  
        else  
        {  
            $("#s_top_feed").fadeOut(1000);  
        }  
	});

	//鼠标在“回到顶部”标签上时显示“回到顶部”文字  
    $("#s_top_feed").mouseover(function(){  
        $(".to-top").addClass("icon-over"); 
        $(".icon-mask").show();
    }).mouseout(function(){
    	$(".to-top").removeClass("icon-over");
    	$(".icon-mask").hide();
    }); 

	//当点击“回到顶部”后，回到页面顶部位置  
    $("#s_top_feed").click(function(){  
        $('body,html').animate({scrollTop:0},500);  
        return false;  
    }); 
});


/*修复右边下拉菜单高度小于页面面高度的情况*/
$(document).ready(function(){
	//在鼠标在右侧边栏上方时...
	$("#moreprolist").mouseover(function(){
		//禁用页面滚动
		$ (window).scroll(function(){$(this).scrollTop(0)});
		//获取页面高度并设置侧栏高度
		$("#moreprolist").css({'height':document.body.scrollHeight + 'px'});
	}).mouseout(function(){
		//鼠标移出时恢复页面滚动
		$ (window).unbind('scroll'); 
	});
});


/*————————————增加主题皮肤记忆功能————————————————*/

//声明一个变量存放LocalStorage的数据
var storage = window.localStorage;
//声明一个变量存放LocalStorage的themekey键值
var storvalue = storage.getItem(themekey);
//检查localStorage是否存有主题数据
if (storvalue != null){
	if (storvalue=="notheme") {
		//去掉皮肤背景图片
		$("#skin_container").attr({style: "background:none;"});
		//去掉页面最外层容器追加的class
		$("#wrapper").removeClass("s-skin-hasbg");
		//去掉追加的一个class（透明度）
		$("#wrapper").removeClass("s-opacity-90");
		//改回百度logo图片路径
		$("#logoimg").attr("src","img/bd_logo1.png");
	} else {
		//显示不使用皮肤按钮
		$("#unselect_theme").show();
		//改变皮肤背景图片
		$("#skin_container").attr({style: "background-color:#404040;background-image:url('"+storvalue+"');"});
		//给页面最外层容器追加一个class（表示有主题背景了）
		$("#wrapper").addClass("s-skin-hasbg");
		//再追加一个class（透明度）
		$("#wrapper").addClass("s-opacity-90");
		//改变百度logo图片路径
		$("#logoimg").attr("src","img/logo_white.png");
	}
}