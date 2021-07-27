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
       $('.sub_visual img').attr('src', 'images/sub_img/sub_visual03.jpg');


        $(function(){
          /* 1단계 설명  : for
          var li_count = $('.thum_list li').length;
          // alert(li_count)

            for(var count=0;count < li_count;count++){
            $('.thum_list li').eq(count).text(count+1);
          }
              */

          var li_count = $('.thum_list li').length;
          var click_count = 1;
          //alert(li_count)
            /*for(var count=0;count < li_count;count++){
            $('.thum_list li a').eq(count).text(count+1);
          }*/
          
            for(var count = 0;count < click_count * 4;count++){
            $('.thum_list li').eq(count).show();
          }
                //클릭수만큼 li 보이기
            $('.more').click(function(){
            click_count += 1;
            //alert(Math.ceil(li_count/4));
            if(Math.ceil(li_count/4) > click_count){
              //alert(click_count);
              li_show(click_count)
            }else if(Math.ceil(li_count/4) == click_count) {
              li_show(click_count)
              $('.more').text('줄이기 -');     
                } else {
              $('.thum_list li').hide()
              click_count = 1;     
              $('.more').text('더보기 +');
              li_show(click_count)
              
              }
            })
          })//전체
          function li_show(click_count){
            for(var count = 0;count < click_count * 4;count++){
              $('.thum_list li').eq(count).show();
                } 
          }


      } else if ($(window).width() > 760) {
      $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual03.jpg');


        $(function(){
          /* 1단계 설명  : for
          var li_count = $('.thum_list li').length;
          // alert(li_count)

            for(var count=0;count < li_count;count++){
            $('.thum_list li').eq(count).text(count+1);
          }
              */

          var li_count = $('.thum_list li').length;
          var click_count = 1;
          //alert(li_count)
            /*for(var count=0;count < li_count;count++){
            $('.thum_list li a').eq(count).text(count+1);
          }*/
          
            for(var count = 0;count < click_count * 4;count++){
            $('.thum_list li').eq(count).show();
          }
                //클릭수만큼 li 보이기
            $('.more').click(function(){
            click_count += 1;
            //alert(Math.ceil(li_count/4));
            if(Math.ceil(li_count/4) > click_count){
              //alert(click_count);
              li_show(click_count)
            }else if(Math.ceil(li_count/4) == click_count) {
              li_show(click_count)
              $('.more').text('줄이기 -');     
                } else {
              $('.thum_list li').hide()
              click_count = 1;     
              $('.more').text('더보기 +');
              li_show(click_count)
              
              }
            })
          })//전체
          function li_show(click_count){
            for(var count = 0;count < click_count * 4;count++){
              $('.thum_list li').eq(count).show();
                } 
          }


      } else {
      $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual03.jpg');


        $(function(){
          /* 1단계 설명  : for
          var li_count = $('.thum_list li').length;
          // alert(li_count)

            for(var count=0;count < li_count;count++){
            $('.thum_list li').eq(count).text(count+1);
          }
              */

          var li_count = $('.thum_list li').length;
          var click_count = 1;
          //alert(li_count)
            /*for(var count=0;count < li_count;count++){
            $('.thum_list li a').eq(count).text(count+1);
          }*/
          
            for(var count = 0;count < click_count * 3;count++){
            $('.thum_list li').eq(count).show();
          }
                //클릭수만큼 li 보이기
            $('.more').click(function(){
            click_count += 1;
            //alert(Math.ceil(li_count/4));
            if(Math.ceil(li_count/3) > click_count){
              //alert(click_count);
              li_show(click_count)
            }else if(Math.ceil(li_count/3) == click_count) {
              li_show(click_count)
              $('.more').text('줄이기 -');     
                } else {
              $('.thum_list li').hide()
              click_count = 1;     
              $('.more').text('더보기 +');
              li_show(click_count)
              
              }
            })
          })//전체
          function li_show(click_count){
            for(var count = 0;count < click_count * 3;count++){
              $('.thum_list li').eq(count).show();
                } 
          }


      } // 리사이징에 따라 img 파일 변경


      $(window).resize(function(){
        if ($(window).width() > 1200){
      $('.sub_visual img').attr('src', 'images/sub_img/sub_visual03.jpg');


        $(function(){
          /* 1단계 설명  : for
          var li_count = $('.thum_list li').length;
          // alert(li_count)

            for(var count=0;count < li_count;count++){
            $('.thum_list li').eq(count).text(count+1);
          }
              */

          var li_count = $('.thum_list li').length;
          var click_count = 1;
          //alert(li_count)
            /*for(var count=0;count < li_count;count++){
            $('.thum_list li a').eq(count).text(count+1);
          }*/
          
            for(var count = 0;count < click_count * 4;count++){
            $('.thum_list li').eq(count).show();
          }
                //클릭수만큼 li 보이기
            $('.more').click(function(){
            click_count += 1;
            //alert(Math.ceil(li_count/4));
            if(Math.ceil(li_count/4) > click_count){
              //alert(click_count);
              li_show(click_count)
            }else if(Math.ceil(li_count/4) == click_count) {
              li_show(click_count)
              $('.more').text('줄이기 -');     
                } else {
              $('.thum_list li').hide()
              click_count = 1;     
              $('.more').text('더보기 +');
              li_show(click_count)
              
              }
            })
          })//전체
          function li_show(click_count){
            for(var count = 0;count < click_count * 4;count++){
              $('.thum_list li').eq(count).show();
                } 
          }


      } else if ($(window).width() > 760) {
       $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual03.jpg');


        $(function(){
          /* 1단계 설명  : for
          var li_count = $('.thum_list li').length;
          // alert(li_count)

            for(var count=0;count < li_count;count++){
            $('.thum_list li').eq(count).text(count+1);
          }
              */

          var li_count = $('.thum_list li').length;
          var click_count = 1;
          //alert(li_count)
            /*for(var count=0;count < li_count;count++){
            $('.thum_list li a').eq(count).text(count+1);
          }*/
          
            for(var count = 0;count < click_count * 4;count++){
            $('.thum_list li').eq(count).show();
          }
                //클릭수만큼 li 보이기
            $('.more').click(function(){
            click_count += 1;
            //alert(Math.ceil(li_count/4));
            if(Math.ceil(li_count/4) > click_count){
              //alert(click_count);
              li_show(click_count)
            }else if(Math.ceil(li_count/4) == click_count) {
              li_show(click_count)
              $('.more').text('줄이기 -');     
                } else {
              $('.thum_list li').hide()
              click_count = 1;     
              $('.more').text('더보기 +');
              li_show(click_count)
              
              }
            })
          })//전체
          function li_show(click_count){
            for(var count = 0;count < click_count * 4;count++){
              $('.thum_list li').eq(count).show();
                } 
          }


      } else {
     $('.sub_visual img').attr('src', 'images/sub_img/ta_sub_visual03.jpg');


        $(function(){
          /* 1단계 설명  : for
          var li_count = $('.thum_list li').length;
          // alert(li_count)

            for(var count=0;count < li_count;count++){
            $('.thum_list li').eq(count).text(count+1);
          }
              */

          var li_count = $('.thum_list li').length;
          var click_count = 1;
          //alert(li_count)
            /*for(var count=0;count < li_count;count++){
            $('.thum_list li a').eq(count).text(count+1);
          }*/
          
            for(var count = 0;count < click_count * 3;count++){
            $('.thum_list li').eq(count).show();
          }
                //클릭수만큼 li 보이기
            $('.more').click(function(){
            click_count += 1;
            //alert(Math.ceil(li_count/4));
            if(Math.ceil(li_count/3) > click_count){
              //alert(click_count);
              li_show(click_count)
            }else if(Math.ceil(li_count/3) == click_count) {
              li_show(click_count)
              $('.more').text('줄이기 -');     
                } else {
              $('.thum_list li').hide()
              click_count = 1;     
              $('.more').text('더보기 +');
              li_show(click_count)
              
              }
            })
          })//전체
          function li_show(click_count){
            for(var count = 0;count < click_count * 3;count++){
              $('.thum_list li').eq(count).show();
                } 
          }

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



/*-----------------li more--------------------*/
/* li들의 전체 갯수를 구해서 클릭할때마다 4개씩 추가로 나타나게 함
   마지막 줄이 나타나면 더보기를 줄이기로 바꾸고 더이상 추가로 나타나지 않음
   줄이기 버튼 상태에서 클릭을 하면 모든 것을 초기 상태로 돌림
   (줄이기-->더보기, li는 처음 갯수만큼 보이기)

  1) css : li들이 보이지 않음
  2) li들을 4개만 보임  0~3 까지, 줄갯수1
  3) li 전체 갯수를 구해서 총 몇줄인지 구하기 
      li전체 / 한줄의 갯수 ==> 올림 수 (ex. 10 / 4 = 3)
  4) 클릭시 한줄씩 늘어남 ==> 클릭 횟수 * 한줄의 갯수
  5) 마지막줄일 경우 더보기를 줄이기로 바꿈 
  6) 5의 이후 경우 클릭은 처음으로 돌아감 
     모든li숨김, 줄이기--> 더보기, 줄갯수-->1 , 첫줄의 li들 보이기
*/

/*-----------------li more--------------------*/








}) //제이쿼리 전체 끝