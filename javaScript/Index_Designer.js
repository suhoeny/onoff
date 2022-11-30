$(function() {
    $(".line").on('mousewheel', function (e) {

        var wheelDelta = e.originalEvent.wheelDelta;

        if (wheelDelta > 0) {

            console.log("up");

            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

        } else {

            console.log("down");

            $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

        }

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
        $('.navitem1').css('color','#999');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#151515');
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
        $('.navitem1').css('color','#999');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#151515');
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
        $('.navitem1').css('color','#999');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#151515');
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
        $('.navitem3').css('color','#151515');
        $('.navitem1').css('color','#999');
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
        $('.navitem1').css('color','#999');
        $('.navitem2').css('color','#999');
        $('.navitem3').css('color','#151515');
        $('.navitem4').css('color','#999');
    }
);
