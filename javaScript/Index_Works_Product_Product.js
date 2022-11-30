// 가로 스크롤
$(function(){
    $(this).on('mousewheel', function (e) {

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

// 글쓰기 버튼 호버 이벤트
$(function(){
    $('.iconimg01').hover(
        function(){
            $('.iconimg01 img').attr('src', 'images/Index_Works_product/icon01-1.png')
            $('.bubox').css('opacity', '100%')
        },
        function(){
            $('.iconimg01 img').attr('src', 'images/Index_Works_product/icon01.png')
            $('.bubox').css('opacity', '0%')
        }
    );
});

// 모달 영역


$(function() {

    $(".modal-btn").on("click",function(){
        $('.modal').css({
            'display':'flex',
            'font-weight':'bolder'
        });
    
    });
    $('.exit').on("click", function(){
        
        $('.modal').css('display','none');
        
    });


    $('.in').click(function() {
        let name = $('.name').val();
        let text = $('.text').val();

        let newPost = $(`<div class="post"><p>${text}</p><p>${name}</p></div>`)
        $('main').append(newPost)

        $('.name').val('');
        $('.text').val('');

        $('.modal').css('display', 'none');

        $(newPost).draggable();
    });

});



$(function(){

    var pause_st = false;

        $('.togg').click(function(){
            $('.post').toggle()

            if(!pause_st){
                $(".pause").css('margin-top', '1.354vw')
                pause_st = true;
            }else{
                $(".pause").css('margin-top', '-1.354vw')
                pause_st = false;
            } 

        })
 
});


$(document).ready(function() {

    $(".name").on('input', function() {
        if ($(".name").val() == '') {

        } else { 

            $('.in').css({
                'background-color': '#333333',
            });

            $('.in h1').css({
                'color': '#ffffff',
            });

        }
    });

    $(".text").on('input', function() {
        if ($(".text").val() == '') {

        } else { 

            $('.in').css({
                'background-color': '#333333',
            });

            $('.in h1').css({
                'color': '#ffffff',
            });

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
