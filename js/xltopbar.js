/**
 * Created by  on 2018/1/27.
 *
 * 雷兵
 *
 */
$(function(){
    $('#header').load('header.html', function () {
        var topMain=$('#topbar').height()+560//是头部的高度加头部与nav导航之间的距离
        var nav=$('#bar');
        $(window).scroll(function(){
            if ($(window).scrollTop()>topMain){//如果滚动条顶部的距离大于topMain则就nav导航就添加类.nav_scroll，否则就移除
                nav.addClass('g_fix');
            }else{
                nav.removeClass('g_fix');
            }
        });
});
});
$(function(){
    $(window).on('scroll',function(){
        var $scroll=$(this).scrollTop();
        $bar.each(function(){
            var $loutitop=$bar.eq($(this).index()).offset().top+100;
            if($loutitop>$scroll){
                $loutili.removeClass('active');
                $loutili.eq($(this).index()).addClass('active');
                return false;
            }
        });
    });
    var $bar=$('#content ul .item');
    var $loutili=$('#menu .item');
    var $end=$(".main-list>#end");
    var $has_con=$('#has_con');
    var con=$('content');
    $loutili.on('click',function(){
        var index = $loutili.index(this);
        $(this).addClass('active').siblings().removeClass('active');
    })
})