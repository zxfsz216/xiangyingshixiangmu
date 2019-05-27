
$(function () {
    $("#sp1").bind("click touchstart",function(){
        if($(".nav-stacked").is(":visible")){
            $(".nav-stacked").slideUp();
            console.log("1111");
        }else{
            $(".nav-stacked").slideDown();
        }
    });
    var index = 0;
    // 公用函数
    function wer(){  
        // 控制bg的left值
        $('.bg').stop(true).animate({'left':-index*$('.bg li').width()},1000);
        $('i').eq(index).addClass('on').siblings().removeClass('on');
    }
    function fun(){
        index++;
        if (index == $('.bg li').length) {
            index = 0;
        };
        wer();	
    }
    $('.next').click(fun)
    $('.prew').click(function(){
        index--;
        if (index < 0) {
            index = $('.bg li').length - 1;
        };
        wer();
    })
    var time = setInterval(fun,1500);
    $('i').mouseenter(function(){
        $index = $(this).index();//获取对应的索引值
        //设置导航按钮样式
        $(this).addClass('on').siblings().removeClass('on');
        $('.bg').stop(true).animate({'left':-$index * $('.bg li').width()},1000);
    })
    $('.box').hover(
        function(){
            clearInterval(time);
            $('.jiantou').fadeIn()
        },
        function(){
            time = setInterval(fun,1500);
            $('.jiantou').fadeOut();
        }
    );
})
