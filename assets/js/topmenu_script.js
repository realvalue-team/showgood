$(document).ready(function(){
	$("#topNav").mouseenter(function(){
		$("#topNavWrap").addClass("on");
		if($(window).scrollTop() < 49) {
			$("#top_logo img").attr("src","./assets/img/common/logo_m.png");
			$("#pfBtn").addClass("black");
		};
	 	$(".top_nav_s").fadeIn(300);
		$(".top_nav_bg").slideDown(200);	
	}).mouseleave(function(){
		$("#topNavWrap").removeClass("on");
		if($(window).scrollTop() < 49) { 
			$("#top_logo img").attr("src","./assets/img/common/logo.png");
			$("#pfBtn").removeClass("black");
		};	
		$('.top_nav_s').stop();
	  	$(".top_nav_s").fadeOut(200);
	  	$('.top_nav_bg').stop();
		$(".top_nav_bg").slideUp(300);
	});
	
	$(".pf_cate ul li > a").hover(function(){
		$(".pf_cate ul li > a").not(this).addClass("off");
	}, function() {
		$(".pf_cate ul li > a").removeClass("off");
	});	
    $("#top_logo").delay(200).animate({"top":"50%"},1500,'easeOutQuint');
    $("#pfBtn span").addClass("move");

    $(window).on("scroll",function(){
        if($(window).scrollTop() > 50) { 
            $('#topNavWrap').addClass("fixed");
            $(".top_nav_bg").addClass("black");
        } else{
            $('#topNavWrap').removeClass("fixed");
            $(".top_nav_bg").removeClass("black");
        }
        return false;
    });	
    
    pfBtn = $("#pfBtn");
    pfWrap = $("#pfWrap");
    $('.nav_deco').css({"right":"-30%"});
    $('.pf_cate ul li').css({"margin-left:":"100px","opacity:":"0"});
    m = 0;  

    /* 닫기 */
    function navClose() { 
        $("body").removeClass("open")
        pfBtn.removeClass("active");
        pfBtn.addClass("no_pointer")					
        setTimeout(function() {pfBtn.removeClass("no_pointer")},1000); 
        $('.pf_cate').delay(0).animate({"width":"100%"},600,'easeInQuart').delay(350).animate({"width":"0"},0);	
        pfWrap.delay(450).fadeOut(250).animate({"right":"-100%"});
        $('.pf_cate ul li').delay(0).animate({"margin-left":"100px","opacity":"0"},300,'easeOutQuart');
    }

    pfBtn.click(function(){
        m++;
        if(m%2 == 1){
            /* 열기 */
            $("body").addClass("open")
            pfBtn.addClass("active");
            pfBtn.addClass("no_pointer")					
            setTimeout(function() {pfBtn.removeClass("no_pointer")}, 900);//클릭방지
            $('.pf_cate').show().delay(300).animate({"width":"100%"},700,'easeOutQuart');
            pfWrap.show().delay(0).animate({"right":"0"},600,'easeOutQuart');	
            $('.pf_cate ul li:eq(0)').delay(400).animate({"margin-left":"0","opacity":"1"},600,'easeOutQuart');
            $('.pf_cate ul li:eq(1)').delay(500).animate({"margin-left":"0","opacity":"1"},600,'easeOutQuart');
            $('.pf_cate ul li:eq(2)').delay(600).animate({"margin-left":"0","opacity":"1"},600,'easeOutQuart');
            $('.pf_cate ul li:eq(3)').delay(700).animate({"margin-left":"0","opacity":"1"},600,'easeOutQuart');
            $('.pf_cate ul li:eq(4)').delay(800).animate({"margin-left":"0","opacity":"1"},600,'easeOutQuart');
        }else{
            navClose(); 
        }; 
    });

    /* 반응형 [s] */
	$("#m_navBtn").click(function(){
		m++;
		if(m%2 == 1){
			$("#m_navBtn").addClass("on");
			$("#navWrap").fadeIn(300).addClass("on");
		}else{
			m_navClose(); 
		}; 
	});	
	$("#topmenuM .m_bmenu").click(function(){
		$('.m_smenu').not($(this).next()).slideUp(200);
		$('.m_bmenu').removeClass('on');
		$(this).addClass('on')
		$(this).next().slideDown(200);
	});	

	m = 0;  	
	function m_navClose() { 
		$("#m_navBtn").removeClass("on");
		$("#navWrap").fadeOut(300).removeClass("on");	
	}	
	/* 반응형 [e] */
});

/* 메뉴라인 */
window.onload = function () {

    var menuLine = document.querySelector('#menuLine');
    var activeMenuCoords = document.querySelector('.menu-item.active').getBoundingClientRect();
    menuLine.style.left = activeMenuCoords.left + 'px';
    menuLine.style.width = activeMenuCoords.width + 'px';

    var menuItem = document.querySelectorAll('.menu-item');
    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener("mouseenter", enter);
        menuItem[i].addEventListener('mouseleave', leave);
        menuItem[i].addEventListener('click', click)
    }

    function enter() {
        activeMenuCoords = this.getBoundingClientRect();
        menuLine.style.left = activeMenuCoords.left + 'px';
        menuLine.style.width = activeMenuCoords.width + 'px';
    }
    function leave() {
        activeMenuCoords = document.querySelector('.menu-item.active').getBoundingClientRect();
        menuLine.style.left = activeMenuCoords.left + 'px';
        menuLine.style.width = activeMenuCoords.width + 'px';
    }
    function click() {
        for (var i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove('active');
        }
        this.classList.add('active');
        activeMenuCoords = this.getBoundingClientRect();
        menuLine.style.left = activeMenuCoords.left + 'px';
        menuLine.style.width = activeMenuCoords.width + 'px';
    }

    window.onresize = function () {
        activeMenuCoords = document.querySelector('.menu-item.active').getBoundingClientRect();
        menuLine.style.left = activeMenuCoords.left + 'px';
        menuLine.style.width = activeMenuCoords.width + 'px';
    }
}	