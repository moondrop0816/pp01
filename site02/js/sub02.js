$(function(){

  /****************************slide************************/

      $(".vertical-center").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        autoplay : true,
        pauseOnHover : true,
        arrows:false,
        infinite : true
      }); //vertical-center - notice







/***************resize img************************************/

      if ($(window).width() > 1200){
       $('.sub_visual img').attr('src', 'images/sub_img/sub_visual02.jpg');
      } else if ($(window).width() > 760) {
      $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual02.jpg');
      } else {
        $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual02.jpg');
      } // 리사이징에 따라 img 파일 변경


      $(window).resize(function(){
        if ($(window).width() > 1200){
      $('.sub_visual img').attr('src', 'images/sub_img/sub_visual02.jpg');
      } else if ($(window).width() > 760) {
       $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual02.jpg');
      } else {
     $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual02.jpg');
      }
    }) // window resize
    

/*******************mobile gnb***************************/

    $(function(){ //실행문 시작

    /*
    
    $("셀렉터1").이벤트(function(){
      $("셀렉터2")
      .animate({css속성:값},시간,움직임방식,콜백함수)	
    })
    
    */

    // .open1을 클릭 -> .LeftWrap이 보여짐. 자신의 left속성의 값을 0으로 이동시킴.
    $(".open1").click(function(){
      $(".LeftWrap").animate({left:0},1000,"swing")
      });
        
    $(".close1").click(function(){
      $(".LeftWrap").animate({left:'-100%'},1000,"swing")
      });
      
    $('#btn1 > li').each(function() {
        var submenu = $(this).find('.sub');
        $(this).click(function(){
          $(submenu).stop().slideToggle();
        })
    });	


    var movie = 0;
    $('#btn1 .movie').click(function(){
      if (movie == 0) {
        $('#gnb_mobile #btn1 .movie a').addClass('on');
        movie = 1;
      } else {
        $('#gnb_mobile #btn1 .movie a').removeClass('on');
        movie = 0;
      }
    });	// movie

    var commu = 0;
    $('#btn1 .commu').click(function(){
      if (commu == 0) {
        $('#gnb_mobile #btn1 .commu a').addClass('on');
        commu = 1;
      } else {
        $('#gnb_mobile #btn1 .commu a').removeClass('on');
        commu = 0;
      }
    });	// commu

    var event = 0;
    $('#btn1 .event').click(function(){
      if (event == 0) {
        $('#gnb_mobile #btn1 .event a').addClass('on');
        event = 1;
      } else {
        $('#gnb_mobile #btn1 .event a').removeClass('on');
        event = 0;
      }
    });	// commu
    
  })//실행틀 끝 - gnb_mobile


$(window).scroll(function(){
       //만약 scrollTop의 위치가 300보다 크면 
       if ($(document).scrollTop() >= 100) {
         $('.h_top').css({background:'rgba(0,0,0,0.5)'})
       }else {
         $('.h_top').css({background:'rgba(0,0,0,0)'})
       }
     }) // 스크롤시 네비 배경색 변경














}) //제이쿼리 전체 끝