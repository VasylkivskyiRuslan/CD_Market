"use strict";function reinit_slider_popup(){var e=$(window).width();e<450?($("#sliderPopup").css("destroy"),reinitSliderPopup(290)):450<e&&e<767?($("#sliderPopup").css("destroy"),reinitSliderPopup(400)):767<e&&e<992?($("#sliderPopup").css("destroy"),reinitSliderPopup(750)):992<e&&e<1200?($("#sliderPopup").css("destroy"),reinitSliderPopup(970)):1200<e&&e<1920&&($("#sliderPopup").css("destroy"),reinitSliderPopup(1170))}function reinitSliderPopup(e){$("#sliderPopup").css("width",e)}$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($("#language").click(function(){$("#languageDrop").slideToggle(0)}),$(document).on("click",function(e){$(e.target).closest("#language").length||$("#languageDrop").hide(),e.stopPropagation()}))}),$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&($("#personalCabinet").click(function(){$("#personalCabinetDrop").slideToggle(0)}),$(document).on("click",function(e){$(e.target).closest("#personalCabinet").length||$("#personalCabinetDrop").hide(),e.stopPropagation()}))}),$(document).ready(function(){$("#signIn").click(function(){$("#signInPopup").arcticmodal()})}),$(document).ready(function(){$("#logIn").click(function(){$("#logInPopup").arcticmodal()})}),jQuery.validator.addMethod("checkMask",function(e,i){return/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g.test(e)}),$(".js-phone").mask("+999(99)999-9999",{autoclear:!1}),$.validator.addMethod("lettersEng",function(e,i){return this.optional(i)||e==e.match(/^[a-zA-Z0-9\s]*$/)}),$.validator.addMethod("lettersEngRus",function(e,i){return this.optional(i)||e==e.match(/^[а-яА-ЯёЁa-zA-Z\s]+$/)}),$(document).ready(function(){$("#sign").validate({rules:{FN:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},LN:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},PHONE:{required:!0,checkMask:!0},EMAIL:{required:!0,email:!0}},messages:{FN:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},LN:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},PHONE:{required:!1,checkMask:!1},EMAIL:{required:!1,email:!1}}})}),$(document).ready(function(){$("#log").validate({rules:{name:{required:!0,lettersEng:!0,minlength:3,maxlength:25},password:{required:!0}},messages:{name:{required:!1,lettersEng:!1,minlength:!1,maxlength:!1},password:{required:!1}},submitHandler:function(){$("#log button").click(function(){window.location.href="personal_cabinet.html"})}})}),$(".mobile__nav ul").hide(),$("#mobileNavClose").hide(),$("#mobileNav").click(function(){$(".mobile__nav ul").slideToggle(0,function(){$("#mobileNav").hide(),$("#mobileNavClose").show()})}),$("#mobileNavClose").click(function(){$(".mobile__nav ul").slideToggle(0,function(){$("#mobileNav").show(),$("#mobileNavClose").hide()})}),$(document).on("click",function(e){$(e.target).closest("#mobileNav").length||$(".mobile__nav ul").hide(function(){$("#mobileNav").show(),$("#mobileNavClose").hide()}),e.stopPropagation()}),$(document).ready(function(){$("#personalCabinet-mobile").click(function(){$("#authorMethod").arcticmodal(),$("#signIn-mobile").click(function(){$("#signInPopup").arcticmodal(),$("#authorMethod").arcticmodal("close")}),$("#logIn-mobile").click(function(){$("#logInPopup").arcticmodal(),$("#authorMethod").arcticmodal("close")})})}),$(".mobile__mainNav ul").hide(),$("#mobileMainNavClose").hide(),$("#mobileMainNav").click(function(){$(".mobile__mainNav ul").slideToggle(0,function(){$("#mobileMainNav").hide(),$("#mobileMainNavClose").show()})}),$("#mobileMainNavClose").click(function(){$(".mobile__mainNav ul").slideToggle(0,function(){$("#mobileMainNav").show(),$("#mobileMainNavClose").hide()})}),$(document).on("click",function(e){$(e.target).closest("#mobileMainNav").length||$(".mobile__mainNav ul").hide(function(){$("#mobileMainNav").show(),$("#mobileMainNavClose").hide()}),e.stopPropagation()}),$(".sortOptions").hide(),$("#sorting").click(function(){$(".sortOptions").slideToggle()}),$(function(){var e=$(".filter select option"),i=$(".filter").find("select").val();$(".filter").find("select").empty().append(e),$(".filter").find("select").val(i),$(".filter").find("select").attr("multiple",!0),$(".filter").find('select option[value=""]').remove(),$(".filter").find("select[multiple]").multiselect({selectAll:!0}),$("select[multiple]").multiselect("loadOptions",[{name:"Round",value:"Round",checked:!0},{name:"Square",value:"Square",checked:!0},{name:"Oval",value:"Oval",checked:!0},{name:"Rectangular",value:"Rectangular",checked:!0},{name:"Hexagonal",value:"Hexagonal",checked:!0},{name:"2 in 1",value:"2in1",checked:!0},{name:"3 in 1",value:"3in1",checked:!0},{name:"Transparent",value:"Transparent",checked:!0},{name:"Complicated",value:"Complicated",checked:!0}])}),$(document).ready(function(){$("#filter").click(function(){$("#filterPopup").arcticmodal()}),$("#filterClose, #filterPopup button").click(function(){$("#filterPopup").arcticmodal("close")})}),$(document).ready(function(){$("#priceRange").slider({range:!0,min:0,max:500,values:[75,300],slide:function(e,i){$("#amountMin").val(" $ "+i.values[0]),$("#amountMax").val(" $ "+i.values[1])}}),$("#amountMin").val(" $ "+$("#priceRange").slider("values",0)),$("#amountMax").val(" $ "+$("#priceRange").slider("values",1))}),$(document).ready(function(){$(".slider").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prev",next:".next"})}),$(document).ready(function(){$("#productSlideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,swipe:!0,swipeFx:"scrollHorz",pager:"#productSlideshowNav",pagerTemplate:""})}),$(document).ready(function(){$("#productSlideshow li").click(function(){var e=$(document).width();e<450?$("#sliderPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","290px"):450<e&&e<767?$("#sliderPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","400px"):767<e&&e<992?$("#sliderPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","750px"):992<e&&e<1200?$("#sliderPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","970px"):1200<e&&e<1920&&$("#sliderPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","1170px"),$("#close").click(function(){$("#sliderPopup").arcticmodal("close")})})});var reinitTimerSliderPopup=void 0;$(window).resize(function(){clearTimeout(reinitTimerSliderPopup),reinitTimerSliderPopup=setTimeout(reinit_slider_popup,50)}),$(function(){$("#productSlideshow li").clone().appendTo($("ul#popupSlideshow"))}),$(function(){$("#productSlideshowNav li").clone().appendTo($("ul#popupSlideshowNav"))}),$(document).ready(function(){$("#popupSlideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,swipe:!0,swipeFx:"scrollHorz",prev:"#prev",next:"#next",pager:"#popupSlideshowNav",pagerTemplate:""})}),$("#productTabs").tabs(),$("#fullyTabs").tabs(),$("#semiTabs").tabs(),$("#idHoloTabs").tabs(),function(i,e,t,n){i(".selectFile").each(function(){var e=i(this).find("input"),t=e.next("label"),n=t.html();e.on("change",function(e){var i="";this.files&&1<this.files.length?i=(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value&&(i=e.target.value.split("\\").pop()),i?t.find("span").html(i):t.html(n)}),e.on("focus",function(){e.addClass("has-focus")}).on("blur",function(){e.removeClass("has-focus")})})}(jQuery,window,document);var minus=$(".minus"),plus=$(".plus");plus.click(function(){var e=$(this.parentNode).parent().find("input.fontSize");e.val(parseInt(e.val())+1),e.change()}),minus.click(function(){var e=$(this.parentNode).parent().find("input.fontSize"),i=parseInt(e.val())-1;i=i<1?1:i,e.val(i),e.change()}),$(document).ready(function(){$(".side-2").hide(),$("#side1").click(function(){$(".side-2").hide(0,function(){$("#side1").addClass("active")}),$(".side-1").show(0,function(){$("#side2").removeClass("active")})}),$("#side2").click(function(){$(this).addClass("active"),$(".side-1").hide(0,function(){$("#side1").removeClass("active")}),$(".side-2").show(0,function(){$("#side2").addClass("active")})})}),$(document).ready(function(){}),$(".accordion ul").hide().prev().click(function(){$(this).parents(".accordion").find("ul").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")}),$(document).ready(function(){$("#orderForm").validate({rules:{FN:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},LN:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},ADR:{required:!0,lettersEngRus:!0},CITY:{required:!0,lettersEngRus:!0},CNTR:{required:!0},PC:{required:!0,number:!0},SH:{required:!0},EMAIL:{required:!0,lettersEng:!0,email:!0},PHONE:{required:!0,checkMask:!0}},messages:{FN:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},LN:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},ADR:{required:!1,lettersEngRus:!1},CITY:{required:!1,lettersEngRus:!1},CNTR:{required:!1},PC:{required:!1,number:!1},SH:{required:!1},EMAIL:{required:!1,lettersEng:!1,email:!1},PHONE:{required:!1,checkMask:!1}},submitHandler:function(){$("#submit").click(function(){$("#thanksOrder").arcticmodal()})}})});