$(function(){
	$(".nav > ul > li").hover(
		function(){
			$(this).find("ul").stop().slideDown(300);
		},
		function(){
			$(this).find("ul").stop().slideUp(300);
		}
	);

	$(".nav > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
		$(this).next("ul").slideDown(300);
	});

	$(".nav ul ul li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
		$(this).parent().parent().slideUp(300);
	});

	let n=0;
	let index=0;
	let total=4

	$(".slider li").eq(n).addClass("active");
	$(".slider .control li").eq(n).addClass("active");

	function setGallery(){
		$(".slider li").removeClass("active");
		$(".slider li").eq(n).addClass("active");
		$(".control li").removeClass("active");
		$(".slider .control li").eq(n).addClass("active");
	}

	function intervalMoving(){
		if(n < (total-1)){
			n=n+1;
		}
		else{
			n=0;
		}
		setGallery();
	}

	// let id=setInterval(intervalMoving, 5000);

	$(".slider .control li").click(function(e){
		e.preventDefault();
		index=$(this).index();

		if(n != index){
			n=index;
			setGallery();
		}
	});

	$(".slider .control li").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(intervalMoving, 5000);
		}
	);

	$(".lnb .close").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
	});

	let t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > 100){
			$("#top").fadeIn(300);
		}
		else{
			$("#top").fadeOut(300);
		}
	});

	$("#top").click(function(e){
		e.preventDefault();
		$("html").delay(300).animate({ scrollTop: 0 }, 500);
	});
});