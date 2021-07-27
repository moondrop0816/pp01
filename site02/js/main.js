$(function(){

  /****************************slide************************/
     $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay : true,
        pauseOnHover : true,
        arrows:false,
        dots : true
      }); // lazy - main slider

      
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        pauseOnHover : true,
        arrows : false,
        pauseOnDotsHover : true,
        fade : true
      }); // regular - box_office slider

      $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '23.5%',
        /*크기 px로 지정시 이미지 크기 조정이 어려움*/
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true, 
        autoplay : true,
        pauseOnHover : true,
        responsive: [                   
                       {  breakpoint: 1200,    
                              settings: {
                                centerPadding: '19.5%'
                              }
                         }, {  breakpoint: 760,
                              settings: {
                                centerPadding: '0%',
                                arrows : false
                              }
                         }
                 ]  //반응형 포인트 지정
      }); //center - release slider

      $(".vertical-center").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        autoplay : true,
        pauseOnHover : true,
        arrows:false,
        infinite : true
      }); //vertical-center - notice







      /* 1. btn_control을 클릭하면 슬라이드가 정지된다
         1-1. btn_control의 배경그림이 변경된다
         2. btn_control을 다시 클릭하면 슬라이드가 재생된다
         2-2. btn_control의 배경그림이 다시 원래대로 변경된다 */
         var pause = 0;
      $('.btn_control').click(function(){
        if (pause == 0) {
          $('.lazy').slick('slickPause');
          $(this).addClass('on');
          pause = 1;
        } else {
          $('.lazy').slick('slickPlay');
          $(this).removeClass('on');
          pause = 0;
        }
      }); // btn_control - slick 슬라이드 일시정지 / 재생




/***************resize img************************************/

      if ($(window).width() > 1200){
        $('#banner img').attr('src', 'images/pc_banner.jpg'); //배너
        $('#main_slide .main_01').attr('src', 'images/slide01.jpg');
        $('#main_slide .main_02').attr('src', 'images/slide02.jpg'); //메인슬라이드
        $('#release .rel01').attr('src', 'images/rel_01.jpg'); 
        $('#release .rel02').attr('src', 'images/rel_02.jpg');
        $('#release .rel03').attr('src', 'images/rel_03.jpg'); //개봉예정
      } else if ($(window).width() > 760) {
        $('#banner img').attr('src', 'images/ta_banner.jpg');
        $('#main_slide .main_01').attr('src', 'images/ta_slide01.jpg');
        $('#main_slide .main_02').attr('src', 'images/ta_slide02.jpg');
        $('#release .rel01').attr('src', 'images/rel_01.jpg'); 
        $('#release .rel02').attr('src', 'images/rel_02.jpg');
        $('#release .rel03').attr('src', 'images/rel_03.jpg'); //개봉예정
      } else {
        $('#banner img').attr('src', 'images/mo_banner.jpg');
        $('#main_slide .main_01').attr('src', 'images/mo_slide01.jpg');
        $('#main_slide .main_02').attr('src', 'images/mo_slide02.jpg');
        $('#release .rel01').attr('src', 'images/mo_rel_01.jpg'); 
        $('#release .rel02').attr('src', 'images/mo_rel_02.jpg');
        $('#release .rel03').attr('src', 'images/mo_rel_03.jpg'); //개봉예정
      } // 리사이징에 따라 img 파일 변경


      $(window).resize(function(){
        if ($(window).width() > 1200){
        $('#banner img').attr('src', 'images/pc_banner.jpg');
        $('#main_slide .main_01').attr('src', 'images/slide01.jpg');
        $('#main_slide .main_02').attr('src', 'images/slide02.jpg');
        $('#release .rel01').attr('src', 'images/rel_01.jpg');
      } else if ($(window).width() > 760) {
        $('#banner img').attr('src', 'images/ta_banner.jpg');
        $('#main_slide .main_01').attr('src', 'images/ta_slide01.jpg');
        $('#main_slide .main_02').attr('src', 'images/ta_slide02.jpg');
        $('#release .rel01').attr('src', 'images/rel_01.jpg'); 
        $('#release .rel02').attr('src', 'images/rel_02.jpg');
        $('#release .rel03').attr('src', 'images/rel_03.jpg'); //개봉예정
      } else {
        $('#banner img').attr('src', 'images/mo_banner.jpg');
        $('#main_slide .main_01').attr('src', 'images/mo_slide01.jpg');
        $('#main_slide .main_02').attr('src', 'images/mo_slide02.jpg');
        $('#release .rel01').attr('src', 'images/mo_rel_01.jpg'); 
        $('#release .rel02').attr('src', 'images/mo_rel_02.jpg');
        $('#release .rel03').attr('src', 'images/mo_rel_03.jpg'); //개봉예정
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
      $(".LeftWrap").animate({left:0},1000,"swing");
      });
        
    $(".close1").click(function(){
      $(".LeftWrap").animate({left:'-100%'},1000,"swing");
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
    });	// event
    
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