$(function(){
/* !!(중요)제이쿼리 플러그인 복사해서 사용하기!!
1. 소스의 제이쿼리 라이브러리 버전 확인(같아야함)
2. 소스 -> 인덱스로 css가져오기(소스의 css 파일 복사, 인덱스에 해당 css 연결링크 추가, 경로 확인 후 수정)
3. 소스 -> 인덱스로 해당되는 html태그 가져오기
4. 스크립트 복사하기(스크립트 링크, 소스의 js파일 복사해서 가져오기, 링크는 경로 확인 후 수정)
 */

    $(".vertical-center").slick({
        dots: false,
        vertical: true,
        centerMode: true,
        arrows : false,
        autoplay : true,
        infinite : true,
        slidesToShow : 1,
        slidesToScroll : 1
      });




     $('.close').click(function(){
          $('#pop_up').slideUp(); /*show/hide, slideUp/slideDown, fadeOut/fadeIn*/
     })

     var user = 0; /*닫힘 0, 열림 1*/
     $('.user').click(function(){
          /*user 클릭했을때 login, search 버튼 디자인 제거. 
          login_box, search_box 닫기. login, search 닫은 상태로 표시.*/
          $('.top button.cart').removeClass('on');
          $('.top div.cart_box').hide();
          cart = 0;
          $('.top button.search').removeClass('on');
          $('.top div.search_box').hide();
          search = 0;

          if (user == 0){
               $('.user_box').fadeIn();
               $(this).addClass('on'); /*this == .lang*/
               user = 1;
          } else {
               $('.user_box').fadeOut();
               $(this).removeClass('on'); /*this == .lang*/
               user = 0;
          }
     }) //user

     var cart = 0; /*닫힘 0, 열림 1*/
     $('.cart').click(function(){
          /*cart 클릭했을때 lang, search 버튼 디자인 제거. 
          lang_box, search_box 닫기. lang, search 닫은 상태로 표시.*/
          $('.top button.user').removeClass('on');
          $('.top div.user_box').hide();
          user = 0;
          $('.top button.search').removeClass('on');
          $('.top div.search_box').hide();
          search = 0;

          if (cart == 0){
               $('.cart_box').fadeIn();
               $(this).addClass('on'); /*this == .login*/
               cart = 1;
          } else {
               $('.cart_box').fadeOut();
               $(this).removeClass('on'); /*this == .login*/
               cart = 0;
          }
     }) //cart

     var search = 0; /*닫힘 0, 열림 1*/
     $('.search').click(function(){
          /*search를 클릭했을때 lang, login 버튼 디자인 제거. 
          lang_box, login_box 닫기. lang, login 닫은 상태로 표시.*/
          $('.top button.user').removeClass('on');
          $('.top div.user_box').hide();
          user = 0;
          $('.top button.cart').removeClass('on');
          $('.top div.cart_box').hide();
          cart = 0;

          if (search == 0){
               $('.search_box').fadeIn();
               $(this).addClass('on'); /*this == .search*/
               search = 1;
          } else {
               $('.search_box').fadeOut();
               $(this).removeClass('on'); /*this == .search*/
               search = 0;
          }
     }) //search

}) //제이쿼리 전체 끝