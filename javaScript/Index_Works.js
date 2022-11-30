$(document).ready(function() {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            if( 7 > current){
              return '0'+current + ' / ' + '0'+(6); 
            }
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on : {
          slideChangeTransitionEnd: function(){
            console.log(this.activeIndex);
          }
        }
    });
});


$(function() {
  //메뉴 호버시 다른 메뉴 색상 어둡게
  $('.navitem1').hover(
      function(){
        $('.navitem1').css('color','#fff');
          $('.navitem2').css('color','#999');
          $('.navitem3').css('color','#999');
          $('.navitem4').css('color','#999');
      },
      function(){
        $('.navitem1').css('color','#999');
          $('.navitem2').css('color','#fff');
          $('.navitem3').css('color','#999');
          $('.navitem4').css('color','#999');
      }
  );

  $('.navitem2').hover(
      function(){
          $('.navitem1').css('color','#999');
          $('.navitem2').css('color','#fff');
          $('.navitem3').css('color','#999');
          $('.navitem4').css('color','#999');
      },
      function(){
          $('.navitem1').css('color','#999');
          $('.navitem2').css('color','#fff');
          $('.navitem3').css('color','#999');
          $('.navitem4').css('color','#999');
      }
  );

  $('.navitem3').hover(
      function(){
          $('.navitem1').css('color','#999');
          $('.navitem2').css('color','#999');
          $('.navitem3').css('color','#fff');
          $('.navitem4').css('color','#999');
      },
      function(){
          $('.navitem1').css('color','#999');
          $('.navitem2').css('color','#fff');
          $('.navitem3').css('color','#999');
          $('.navitem4').css('color','#999');
      }
  );

  $('.navitem4').hover(
      function(){
          $('.navitem2').css('color','#999');
          $('.navitem3').css('color','#999');
          $('.navitem1').css('color','#999');
          $('.navitem4').css('color','#fff');
      },
      function(){
          $('.navitem2').css('color','#fff');
          $('.navitem3').css('color','#999');
          $('.navitem1').css('color','#999');
          $('.navitem4').css('color','#999');
      }
  );

  //works 클릭시 드롭메뉴 나오기
  $('.navitem2').click(function(){
      $('.drop').toggleClass('opacity');
  });
});
