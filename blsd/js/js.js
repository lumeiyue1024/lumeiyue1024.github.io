// JavaScript Document
$(document).ready(function() {
    $('.logo-box').mouseenter(function(){
		$('.logo2').stop().animate({height:'50px'})
		}).mouseleave(function(){
		 $('.logo2').stop().animate({height:'0px'})
			})
		
	//图片高度自适应
	function imgsize(){
		var domwidth=$(window).width();
		var domheight=domwidth*700/2000;
		 $('.banner').css("height",domheight+'px')
		}
	  imgsize();
	  window.onresize=function(){
		  imgsize();
		  }
	//返回顶部
	addEventListener("mousewheel",function(){
		var scroller=document.body.scrollTop;
		 if(scroller>200){
		   $('.backtop').css("display",'block')
			 }else{
			$('.backtop').css("display",'none')	 
				 }
			$('.backtop').click(function(){
			  document.body.scrollTop=0;
			  $(this).css('display','none')
				})
		})
});
