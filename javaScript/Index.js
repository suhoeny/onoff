$(function() {
    //메뉴 호버시 다른 메뉴 색상 어둡게
    $('.navitem1').hover(
        function(){
            $('.navitem2').css('color','#999');
            $('.navitem3').css('color','#999');
            $('.navitem4').css('color','#999');
        },
        function(){
            $('.navitem2').css('color','#fff');
            $('.navitem3').css('color','#fff');
            $('.navitem4').css('color','#fff');
        }
    );

    $('.navitem2').hover(
        function(){
            $('.navitem1').css('color','#999');
            $('.navitem3').css('color','#999');
            $('.navitem4').css('color','#999');
        },
        function(){
            $('.navitem1').css('color','#fff');
            $('.navitem3').css('color','#fff');
            $('.navitem4').css('color','#fff');
        }
    );

    $('.navitem3').hover(
        function(){
            $('.navitem1').css('color','#999');
            $('.navitem2').css('color','#999');
            $('.navitem4').css('color','#999');
        },
        function(){
            $('.navitem1').css('color','#fff');
            $('.navitem2').css('color','#fff');
            $('.navitem4').css('color','#fff');
        }
    );

    $('.navitem4').hover(
        function(){
            $('.navitem2').css('color','#999');
            $('.navitem3').css('color','#999');
            $('.navitem1').css('color','#999');
        },
        function(){
            $('.navitem2').css('color','#fff');
            $('.navitem3').css('color','#fff');
            $('.navitem1').css('color','#fff');
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
            $('.navitem3').css('color','#999');
            $('.navitem4').css('color','#999');
        },
        function(){
            $('.navitem1').css('color','#fff');
            $('.navitem3').css('color','#fff');
            $('.navitem4').css('color','#fff');
        }
    );

    //링크 연결
    $('.navitem1').click(function () {
        $('.circle').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        $('.circle1').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        setTimeout(function () {
            $('container').fadeOut(300);
            $('body').css('background-color', '#fff');
        },300);

        setTimeout(function () {
            window.location.href = 'Index_About.html';
        }, 400);

        // $('body').fadeOut(300, function () {
        //     window.location.href = 'Index_About.html';
        // })
    });

    $('.dropnav1').click(function () {
        $('.circle').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        $('.circle1').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        setTimeout(function () {
            $('container').fadeOut(300);
            $('body').css('background-color', '#fff');
        },300);

        setTimeout(function () {
            window.location.href = 'Index_Works_Product.html';
        }, 400);

        // $('body').fadeOut(300, function () {
        //     window.location.href = 'Index_Works_Product.html';
        // })
    });

    $('.dropnav2').click(function () {
        $('.circle').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        $('.circle1').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        setTimeout(function () {
            $('container').fadeOut(300);
            $('body').css('background-color', '#fff');
        },300);

        setTimeout(function () {
            window.location.href = 'Index_Works_UXUI.html';
        }, 400);

        // $('body').fadeOut(300, function () {
        //     window.location.href = 'Index_Works_UXUI.html';
        // })
    });

    $('.navitem3').click(function () {
        $('.circle').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        $('.circle1').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        setTimeout(function () {
            $('container').fadeOut(300);
            $('body').css('background-color', '#fff');
        },300);

        setTimeout(function () {
            window.location.href = 'Index_Designer.html';
        }, 400);

        // $('body').fadeOut(300, function () {
        //     window.location.href = 'Index_Designer.html';
        // })
    });

    $('.navitem4').click(function () {
        $('.circle').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        $('.circle1').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        setTimeout(function () {
            $('container').fadeOut(300);
            $('body').css('background-color', '#fff');
        },300);

        setTimeout(function () {
            window.location.href = 'Index_Credit.html';
        }, 400);

        // $('body').fadeOut(300, function () {
        //     window.location.href = 'Index_Credit.html';
        // })
    });

    $('.pro').click(function () {
        $('.circle').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        $('.circle1').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        setTimeout(function () {
            $('container').fadeOut(300);
            $('body').css('background-color', '#fff');
        },300);

        setTimeout(function () {
            window.location.href = 'Index_Works_Product.html';
        }, 400);

        // $('body').fadeOut(300, function () {
        //     window.location.href = 'Index_Works_Product.html';
        // })
    });

    $('.ui').click(function () {
        $('.circle').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        $('.circle1').animate({
            width: '100vw',
            height: '100vw',
            left: '0',
            top: '0'
        }, 300);

        setTimeout(function () {
            $('container').fadeOut(300);
            $('body').css('background-color', '#fff');
        },300);

        setTimeout(function () {
            window.location.href = 'Index_Works_UXUI.html';
        }, 400);

        // $('body').fadeOut(300, function () {
        //     window.location.href = 'Index_Works_UXUI.html';
        // })
    });
});