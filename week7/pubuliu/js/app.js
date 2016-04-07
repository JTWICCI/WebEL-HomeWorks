// JavaScript Document

$(document).ready(function(){
	$(window).on("load",function(){ //监听window的加载load事件
		imgLocation();
		//模拟网络获取数据的图片（JSON字符串格式）
		var dataImg = {"data":[{"src":"1.jpg"},{"src":"6.jpg"},{"src":"3.jpg"},{"src":"5.jpg"},{"src":"8.jpg"},{"src":"13.jpg"},{"src":"21.jpg"},{"src":"31.jpg"},{"src":"35.jpg"},{"src":"40.jpg"}]};
		window.onscroll = function(){ //监听鼠标滚动事件
			if (scrollside()) { //满足加载条件时
				$.each(dataImg.data,function(index,value){ //遍历数据并动态加载
					var box = $("<div>").addClass("box").appendTo($("#container")); //创建图片外层框架div
					var content = $("<div>").addClass("content").appendTo(box); //在外层框架内创建包裹图片的div
					//添加图片进div
					$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
				});
				imgLocation(); //调用调整图片位置的函数
			}
		};
	});
});

//监听窗口大小是否有改变
$(window).resize(function(){
	location.reload(); //重新加载当前文档
});

//滚动到最后一张图片一半的时候加载图片
function scrollside() {
	var box = $(".box");	//创建盒子对象
	var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);  //获得最后一张图片在其列的高度再加上它自身一半
	var documentHeight = $(document).width(); //获得当前文档的宽度
	var scrollHeight = $(window).scrollTop(); //获得滚动条距顶端的高度
	//如果滚动条距顶端的高度加文档的宽度大于“边界”就返回true
	return (lastboxHeight < scrollHeight + documentHeight)?true:false;
}

//调整图片位置的函数
function imgLocation() {
	var box = $(".box");	//创建盒子对象
	var boxWidth = box.eq(0).width();	//得到第一张图片的宽度
	var num = Math.floor($(window).width()/boxWidth);	//计算一行能摆放的图片数量
	var boxArr=[];		//声明一个数组承载一列中的所有盒子高度
	box.each(function(index,value){ //循环 (index是来确定当前的元素在哪一个位置，value确定当前的元素是哪一个元素)
		var boxHeight = box.eq(index).height(); //获取到当前盒子的高度
		if (index < num) {
			boxArr[index] = boxHeight; //储存每行盒子的高度
		}else{
			var minboxHeight = Math.min.apply(null,boxArr); //获取最小盒子的高度
			var minboxIndex = $.inArray(minboxHeight,boxArr); //获取最小高度盒子的位置
			$(value).css({ //获取jquery对象设置其css样式放在正确的位置
				"position" : "absolute",
				"top" : minboxHeight,
				"left" : box.eq(minboxIndex).position().left
			});
			boxArr[minboxIndex] += box.eq(index).height(); //重新记录其在当前行的高度
		}
	});
}