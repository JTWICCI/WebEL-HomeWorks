define(function(require,exports,module){var e={};e.jobs=function(){var e=$(".focuswork-wrap ul");var t=$(".focuswork-wrap ul li");var a=$(".focuswork-wrap ul").css("width");var r=t.first().css("width");r="186.667px";a="2053.33px";$(".focuswork-wrap").mouseenter(function(){$("#work-left").fadeIn();$("#work-right").fadeIn();$("#work-left").mouseenter(function(){$(this).addClass("arrow-left2")}).mouseleave(function(){$(this).removeClass("arrow-left2")});$("#work-right").mouseenter(function(){$(this).addClass("arrow-right2")}).mouseleave(function(){$(this).removeClass("arrow-right2")})}).mouseleave(function(){$("#work-left").fadeOut();$("#work-right").fadeOut()});$("#work-left").on("click",function(){e.animate({left:"+="+r},200,"linear",function(){var t=parseFloat(e.css("left"))+10;if(t>0){e.css("left",-parseFloat(r)*5+"px")}})});$("#work-right").on("click",function(){e.animate({left:"-="+r},200,"linear",function(){var t=parseFloat(e.css("left"))-10;if(t<-parseFloat(r)*8){e.css("left",-parseFloat(r)*3+"px")}})})};e.firms=function(){var e=$("#enterprise .learnbox .strategy .startegy-box .swiper-container .swiper-wrapper");var t=e.children("a");var a=e.css("width");var r=t.first().css("width");r="159.667px";$("#enterprise .learnbox .strategy").mouseenter(function(){$("#banner-left3").fadeIn();$("#banner-right3").fadeIn()}).mouseleave(function(){$("#banner-left3").fadeOut();$("#banner-right3").fadeOut()});$("#banner-left3").on("click",function(){e.animate({left:"+="+r},200,"linear",function(){var t=parseFloat(e.css("left"))+10;if(t>0){e.css("left",-parseFloat(r)*21+"px")}})});$("#banner-right3").on("click",function(){e.animate({left:"-="+r},200,"linear",function(){var t=parseFloat(e.css("left"))-10;if(t<-parseFloat(r)*27){e.css("left",-parseFloat(r)*6+"px")}})})};e.schools=function(){var e=$("#university .learnbox .swiper-car-box .swiper-container .swiper-wrapper");var t=e.children("a");var a=e.css("width");var r=t.first().css("width");a="3695.14px";r="136.857px";$("#university .learnbox .swiper-car-box").mouseenter(function(){$("#banner-left2").fadeIn();$("#banner-right2").fadeIn()}).mouseleave(function(){$("#banner-left2").fadeOut();$("#banner-right2").fadeOut()});$("#banner-left2").on("click",function(){e.animate({left:"+="+r},200,"linear",function(){var t=parseFloat(e.css("left"))+10;if(t>0){e.css("left",-parseFloat(r)*13+"px")}})});$("#banner-right2").on("click",function(){e.animate({left:"-="+r},200,"linear",function(){var t=parseFloat(e.css("left"))-10;if(t<-parseFloat(r)*20){e.css("left",-parseFloat(r)*7+"px")}})})};e.media=function(){var e=$("#mediareport .strategy2 .startegy-box .swiper-container .swiper-wrapper");var t=e.children("a");var a=e.css("width");var r=t.first().css("width");a="4151.33px";r="159.667px";$("#mediareport .strategy2 .startegy-box").mouseenter(function(){$("#banner-left4").fadeIn();$("#banner-right4").fadeIn()}).mouseleave(function(){$("#banner-left4").fadeOut();$("#banner-right4").fadeOut()});$("#banner-left4").on("click",function(){e.animate({left:"+="+r},200,"linear",function(){var t=parseFloat(e.css("left"))+10;if(t>0){e.css("left",-parseFloat(r)*14+"px")}})});$("#banner-right4").on("click",function(){e.animate({left:"-="+r},200,"linear",function(){var t=parseFloat(e.css("left"))-10;if(t<-parseFloat(r)*20){e.css("left",-parseFloat(r)*6+"px")}})})};module.exports=e});