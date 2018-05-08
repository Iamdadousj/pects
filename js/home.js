/**
 * Created by  on 2018/1/24.
 *
 * 雷兵
 *
 */
//home轮播
$(function () {
    var index = 0, page = 7;
    var imgLs = $(".imgL").children(); //img列表
    var timer;
    var imgW = $(".imgW").children();//img
    var spn = $(".main-title").eq(0).children().eq(1);//分类标签
    var dot = $(".dot");    //小点点
    function go() {
        if (index == (imgLs.length - 1)) {
            index = 0;
        }
        else {
            index++;
        }
        dot.children().eq(index).addClass("hov").siblings().removeClass("hov");
        imgLs.eq(index).fadeIn(200, function () {
            $(this).addClass("hov");
        }).siblings().fadeOut(200, function () {
            $(this).removeClass("hov");
        });
    }
    go();
    timer = setInterval(go, 5000);
    //鼠标划入大的盒子停止计时器
    $(".indexBox").eq(0).on("mouseenter", ".imgL>div", function (e) {
        clearInterval(timer);
    });
    $(".indexBox").eq(0).on("mouseleave", function (e) {
        timer = setInterval(go, 5000);
    });
    dot.on("mouseenter", "a", function (e) {
        clearInterval(timer);
        if ($(this).index() == 0) {
            index = (imgLs.length - 1);
        } else {
            index = $(this).index() - 1;
        }
        go();
    })
})

//tab 选项卡 ajax
$(function () {
    var  lib_cn= $(".lib_conbox").eq(0);
    var  li_mu=$(".lib-menu>ul>li");
    var  li_one=$(".con_one");
    var  eig_pro=$(".eight-listpro>ul")
    li_mu.hover(function(){
        eig_pro.html("");
        var name = $(this).attr("data-name");
        console.log(name);
        var index = $(this).index();
        $.get("js/tab.json",function(data){
            $.each(data,function(index){
                var _name = data[index].name;
                var oList= data[index].list;
                if(name==_name) {
                    $.each(oList, function (index) {
                        $("<li class='fl'>" + "<a href=''>" +
                            "<div class='eight-proimg'>" +
                            "<img src='" + oList[index].zom_img + "' class='zom'/>" +
                            "</div>" + "<h1 class='ft12 c666 overflow'>" + oList[index].h_title + "</h1>" +
                            "<div class='ft16 cred dprice mt5'>" + oList[index].price +
                            "</div>" + "</a>" +
                            "</li>").appendTo(eig_pro)
                    })
                }
            })
        })
        $(this).addClass('hover').siblings().removeClass('hover');
    });
})


console.log([
    "                   _ooOoo_",
    "                  o8888888o",
    "                  88\" . \"88",
    "                  (| -_- |)",
    "                  O\\  =  /O",
    "               ____/`---'\\____",
    "             .'  \\\\|     |//  `.",
    "            /  \\\\|||  :  |||//  \\",
    "           /  _||||| -:- |||||-  \\",
    "           |   | \\\\\\  -  /// |   |",
    "           | \\_|  ''\\---/''  |   |",
    "           \\  .-\\__  `-`  ___/-. /",
    "         ___`. .'  /--.--\\  `. . __",
    "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
    "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
    "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
    "======`-.____`-.___\\_____/___.-`____.-'======",
    "                   `=---='",
    "^^^^^^^^^^^^^^^uuuuuuuu^^^^^^^^^^^^^^^^^^^^^^^^^^^^uuuuuuu^^",
    "         好想哭       永无BUG"
].join('\n'));