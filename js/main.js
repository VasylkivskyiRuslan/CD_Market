"use strict";$(document).ready(function(){$("#slider").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prev",next:".next"})}),$(document).ready(function(){$("#productSlideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,pager:"#productSlideshowNav",pagerTemplate:""})}),$(document).ready(function(){$("#productSlideshow li img").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#sliderPopup").css("display","block").animate({opacity:1},200)})}),$("#overlay, #close").click(function(){$("#sliderPopup").animate({opacity:0},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(function(){$("#productSlideshow li").clone().appendTo($("ul#popupSlideshow"))}),$(function(){$("#productSlideshowNav li").clone().appendTo($("ul#popupSlideshowNav"))}),$(document).ready(function(){$("#popupSlideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,prev:"#prev",next:"#next",pager:"#popupSlideshowNav",pagerTemplate:""})});