"use strict";function getSelectedValue(e){return $("#"+e).find("dt a span.value").html()}$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($("#language").click(function(){$("#languageDrop").slideToggle(0)}),$(document).on("click",function(e){$(e.target).closest("#language").length||$("#languageDrop").hide(),e.stopPropagation()}))}),$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($("#personalCabinet").click(function(){$("#personalCabinetDrop").slideToggle(0)}),$(document).on("click",function(e){$(e.target).closest("#personalCabinet").length||$("#personalCabinetDrop").hide(),e.stopPropagation()}))}),$(document).ready(function(){$("#signIn").click(function(){$("#signInPopup").arcticmodal()})}),$(document).ready(function(){$("#logIn").click(function(){$("#logInPopup").arcticmodal()})}),jQuery.validator.addMethod("checkMask",function(e,i){return/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g.test(e)}),$(".js-phone").mask("+380(99)999-9999",{autoclear:!1}),$.validator.addMethod("lettersEng",function(e,i){return this.optional(i)||e==e.match(/^[a-zA-Z0-9\s]*$/)}),$.validator.addMethod("lettersEngRus",function(e,i){return this.optional(i)||e==e.match(/^[а-яА-ЯёЁa-zA-Z\s]+$/)}),$(document).ready(function(){$("#sign").validate({rules:{FN:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},LN:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},PHONE:{required:!0,checkMask:!0},EMAIL:{required:!0,email:!0}},messages:{FN:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},LN:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},PHONE:{required:!1,checkMask:!1},EMAIL:{required:!1,email:!1}}})}),$(document).ready(function(){$("#log").validate({rules:{name:{required:!0,lettersEng:!0,minlength:3,maxlength:25},password:{required:!0}},messages:{name:{required:!1,lettersEng:!1,minlength:!1,maxlength:!1},password:{required:!1}},submitHandler:function(){$("#log button").click(function(){window.location.href="personal_cabinet.html"})}})}),$(".mobile__nav ul").hide(),$("#mobileNavClose").hide(),$("#mobileNav").click(function(){$(".mobile__nav ul").slideToggle(0,function(){$("#mobileNav").hide(),$("#mobileNavClose").show()})}),$("#mobileNavClose").click(function(){$(".mobile__nav ul").slideToggle(0,function(){$("#mobileNav").show(),$("#mobileNavClose").hide()})}),$(document).on("click",function(e){$(e.target).closest("#mobileNav").length||$(".mobile__nav ul").hide(function(){$("#mobileNav").show(),$("#mobileNavClose").hide()}),e.stopPropagation()}),$(".mobile__mainNav ul").hide(),$("#mobileMainNavClose").hide(),$("#mobileMainNav").click(function(){$(".mobile__mainNav ul").slideToggle(0,function(){$("#mobileMainNav").hide(),$("#mobileMainNavClose").show()})}),$("#mobileMainNavClose").click(function(){$(".mobile__mainNav ul").slideToggle(0,function(){$("#mobileMainNav").show(),$("#mobileMainNavClose").hide()})}),$(document).on("click",function(e){$(e.target).closest("#mobileMainNav").length||$(".mobile__mainNav ul").hide(function(){$("#mobileMainNav").show(),$("#mobileMainNavClose").hide()}),e.stopPropagation()}),$(".sortOptions").hide(),$("#sorting").click(function(){$(".sortOptions").slideToggle()}),$(".dropdown dt a").on("click",function(){$(".dropdown dd ul").slideToggle("fast")}),$(".dropdown dd ul li a").on("click",function(){$(".dropdown dd ul").hide()}),$(document).bind("click",function(e){$(e.target).parents().hasClass("dropdown")||$(".dropdown dd ul").hide()}),$('.mutliSelect input[type="checkbox"]').on("click",function(){var e=$(this).closest(".mutliSelect").find('input[type="checkbox"]').val();if(e=$(this).val()+",",$(this).is(":checked")){var i='<span title="'+e+'">'+e+"</span>";$(".multiSel").append(i),$(".hida").hide()}else{$('span[title="'+e+'"]').remove();var n=$(".hida");$(".dropdown dt a").append(n)}}),$(document).ready(function(){$(".slider").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prev",next:".next"})}),$(document).ready(function(){$("#productSlideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,pager:"#productSlideshowNav",pagerTemplate:""})}),$(document).ready(function(){$("#productSlideshow li img").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#sliderPopup").css("display","block").animate({opacity:1},200)})}),$("#overlay, #close").click(function(){$("#sliderPopup").animate({opacity:0},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(function(){$("#productSlideshow li").clone().appendTo($("ul#popupSlideshow"))}),$(function(){$("#productSlideshowNav li").clone().appendTo($("ul#popupSlideshowNav"))}),$(document).ready(function(){$("#popupSlideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,prev:"#prev",next:"#next",pager:"#popupSlideshowNav",pagerTemplate:""})}),$("#productTabs").tabs(),function(i,e,n,o){i(".selectFile").each(function(){var e=i(this).find("input"),n=e.next("label"),o=n.html();e.on("change",function(e){var i="";this.files&&1<this.files.length?i=(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value&&(i=e.target.value.split("\\").pop()),i?n.find("span").html(i):n.html(o)}),e.on("focus",function(){e.addClass("has-focus")}).on("blur",function(){e.removeClass("has-focus")})})}(jQuery,window,document);var minus=$(".minus"),plus=$(".plus");plus.click(function(){var e=$(this.parentNode).parent().find("input.fontSize");e.val(parseInt(e.val())+1),e.change()}),minus.click(function(){var e=$(this.parentNode).parent().find("input.fontSize"),i=parseInt(e.val())-1;i=i<1?1:i,e.val(i),e.change()}),$(document).ready(function(){$(".side-2").hide(),$("#side1").click(function(){$(".side-2").hide(0,function(){$("#side1").addClass("active")}),$(".side-1").show(0,function(){$("#side2").removeClass("active")})}),$("#side2").click(function(){$(this).addClass("active"),$(".side-1").hide(0,function(){$("#side1").removeClass("active")}),$(".side-2").show(0,function(){$("#side2").addClass("active")})})}),$(document).ready(function(){}),$(".accordion ul").hide().prev().click(function(){$(this).parents(".accordion").find("ul").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")});