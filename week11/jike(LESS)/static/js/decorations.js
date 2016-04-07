// JavaScript Document
define(function(require,exports,module){

var a = {};

//页面头部搜索框样式
a.searchbox = function(){
	$(".search-text").focus(function(){
		$(".search-btn").addClass("search-btn2");
		$(".hot-words").hide();
	});
	$(".search-text").blur(function(){
		$(".search-btn").removeClass("search-btn2");
		$(".hot-words").show();
	});
};


/*出现滚动条时页面右下角的“回到顶部”箭头设置*/
a.gotop = function(){
	//当滚动条的位置处于距顶部400像素以下时，“回到顶部”箭头出现，否则消失
	$(window).scroll(function(){
		if ($(window).scrollTop()>400){  
            $("#gototop .top").fadeIn(1000);  
        }  
        else  
        {  
            $("#gototop .top").fadeOut(1000);  
        }  
	});
	//当点击“回到顶部”后，回到页面顶部位置  
    $("#gototop .top").click(function(){  
        $('body,html').animate({scrollTop:0},500);  
        return false;  
    }); 
};


module.exports = a;

});