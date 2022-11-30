$(function () {
    $('.second').click(function () {
        $('.swiper-design .main .img1').animate({
            left: '-35vw'
        }, 300);
        // .animate({
        //     opacity: '0'
        // }, 50);
        $('.swiper-design .main .img2').animate({
            right: '-60vw'
        }, 300);
        // .animate({
        //     opacity: '0'
        // }, 50);
        $('.swiper-design .main h1:first-child').animate({
            left: '-100vw'
        }, 500);
        // .animate({
        //     opacity: '0'
        // }, 50);
        $('.swiper-design .main h1:nth-child(2)').animate({
            left: '100vw'
        }, 500);
        // .animate({
        //     opacity: '0'
        // }, 50);
        $('.swiper-design .main p').fadeOut(300);
        setTimeout(function () {
            $('.swiper-design').fadeOut(300);
            $('.swiper-introduce').fadeIn(300);
            $('.swiper-introduce .main .img1').css('left', '7.813vw');
            $('.swiper-introduce .main .img2').css('right', '0');
            $('.swiper-introduce .main h1:first-child').css('left', '0');
            $('.swiper-introduce .main h1:nth-child(2)').css('left', '25.417vw');
            $('.swiper-introduce .main p').fadeIn(300);
        }, 500);

        $('.swiper-pagination .first').css('background-color', '#CECECE');
        $('.swiper-pagination .second').css('background-color', '#333');
        $('.swiper-pagination p').css('color', '#333');
        $('.swiper-pagination p span').css('color', '#999');

    });

    $('.first').click(function () {
        $('.swiper-introduce .main .img1').animate({
            left: '-50vw'
        }, 300);
        $('.swiper-introduce .main .img2').animate({
            right: '-60vw'
        }, 300);
        $('.swiper-introduce .main h1:first-child').animate({
            left: '-100vw'
        }, 500);
        $('.swiper-introduce .main h1:nth-child(2)').animate({
            left: '100vw'
        }, 500);
        $('.swiper-introduce .main p').fadeOut(300);
        setTimeout(function () {
            $('.swiper-introduce').fadeOut(300);
            $('.swiper-design').fadeIn(300);
            $('.swiper-design .main .img1').css('left', '10.417vw');
            $('.swiper-design .main .img2').css('right', '0');
            $('.swiper-design .main h1:first-child').css('left', '0');
            $('.swiper-design .main h1:nth-child(2)').css('left', '25.417vw');
            $('.swiper-design .main p').fadeIn(300);
        }, 500);

        $('.swiper-pagination .first').css('background-color', '#333');
        $('.swiper-pagination .second').css('background-color', '#CECECE');
        $('.swiper-pagination p').css('color', '#999');
        $('.swiper-pagination p span').css('color', '#333');

    });
});




//메뉴 호버시 다른 메뉴 색상 어둡게
$('.navitem1').hover(
    function(){
        $('.navitem1').css('color','#151515');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#999');
        $('.navitem4').css('color','#999');
    },
    function(){
        $('.navitem1').css('color','#151515');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#999');
        $('.navitem4').css('color','#999');
    }
);

$('.navitem2').hover(
    function(){
        $('.navitem1').css('color','#999');
        $('.navitem2').css('color','#151515');
        $('.navitem3').css('color','#999');
        $('.navitem4').css('color','#999');
    },
    function(){
        $('.navitem1').css('color','#151515');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#999');
        $('.navitem4').css('color','#999');
    }
);

$('.navitem3').hover(
    function(){
        $('.navitem1').css('color','#999');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#151515');
        $('.navitem4').css('color','#999');
    },
    function(){
        $('.navitem1').css('color','#151515');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#999');
        $('.navitem4').css('color','#999');
    }
);

$('.navitem4').hover(
    function(){
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#999');
        $('.navitem1').css('color','#999');
        $('.navitem4').css('color','#151515');
    },
    function(){
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#999');
        $('.navitem1').css('color','#151515');
        $('.navitem4').css('color','#999');
    }
);

//works 클릭시 드롭메뉴 나오기
$('.navitem2').click(function(){
    $('.drop').toggleClass('opacity');
});

//드롭메뉴 호버시에도 works 진하게
$('.drop').hover(
    function(){
        $('.navitem1').css('color','#999');
        $('.navitem2').css('color','#151515');
        $('.navitem3').css('color','#999');
        $('.navitem4').css('color','#999');
    },
    function(){
        $('.navitem1').css('color','#151515');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#999');
        $('.navitem4').css('color','#999');
    }
);