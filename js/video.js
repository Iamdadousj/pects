/**
 * Created by Administrator on 2018/1/30.
 */
$(function(){
    $('.L_cover>span').click(function(){
        $(this).css('display','none');
        $('video').trigger('play');
        //如果用play()，pause()方法必须将DOM对象转化为jQuery对象 此时可以利用get(下标)
        $('video').addClass('ding');
    });
    $("#header").load("header.html", function () {
        var topMain=$("#topbar").height()+170//是头部的高度加头部与nav导航之间的距离
        var nav=$("#videoBox");
        $(window).scroll(function(){
            if ($(window).scrollTop()>topMain){//如果滚动条顶部的距离大于topMain则就nav导航就添加类.nav_scroll，否则就移除
                nav.addClass("g_fix");
            }else{
                nav.removeClass("g_fix");
            }
        });
    });
});