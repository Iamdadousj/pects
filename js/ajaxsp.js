/**
 * Created by Administrator on 2018/1/27.
 */
    //ajax获取商品列表
$(function () {
    var cateLi = $(".main-list-r>.cate-l").eq(0);
    $.get("js/goods.json", function (res) {
        var tis = "";  //创建大的title
        for (var i = 0; i < res.length; i++) {
            var hes = ""; //创建小的列表
            for (var j = 0; j < res[i].title.head.length; j++) {
                var lis = "";      //创建a标签
                for (var k = 0; k < res[i].title.head[j].list.length; k++) {
                    lis += '<a href="goodslist.html">'
                        + res[i].title.head[j].list[k] +
                        '</a>';
                }
                hes += '<div class="mid_head">' +
                    '<a href="#">' + res[i].title.head[j].headName + '</a>' +
                    '<img src="' + res[i].title.head[j].img + '"/>' +
                    '</div>' +
                    '<div class="mid_list">' + lis + '</div>' +
                    '<div class="clear dotline">' +
                    '</div>';
            }
            tis += '<div class="mincate">' +
                '<div class="ctitle">' +
                '<img class="catepic" src="' + res[i].title.img + '">' +
                '<a href="#">' + res[i].title.content + '</a>' +
                '<i></i>' +
                '<a href="goodslist.html">' +
                '<img src="' + res[i].title.gif + '" width="220" height="35"></a>' +
                '</div>' +
                '<div class="clear dotline"></div>'
                + hes + '</div>';
        }
        cateLi.html(tis);
    }, "json");
})

//商品列表划入画出效果
$(function () {
    var detU = $(".detype>ul").eq(0);
    var lr = $(".main-list-r").eq(0);
    var l = $(".cate-l").eq(0);
    //鼠标移入列表
    detU.on("mouseenter", "li", function (e) {
        $(this).addClass("hov").siblings().removeClass("hov");
        var index = $(this).index();
        lr.css("display", "block");
        for (var i = 0; i < l.children().length; i++) {
            if (i == (2 * index) || i == (2 * index + 1)) {
                l.children().eq(i).css("display", "block");
            } else {
                l.children().eq(i).css("display", "none");
            }
        }
    });
    //移出
    detU.on("mouseleave", function (e) {
        if ($(e.relatedTarget).parents(".main-list-r").length != 0) {
            return;
        }
        $(this).children().removeClass("hov");

        lr.css("display", "none");
    });
    //左边的列表移出
    lr.on("mouseenter", function () {
        $(this).css("display", "block");
    });
    lr.on("mouseleave", function () {
        detU.children().removeClass("hov");
        $(this).css("display", "none");
    })
});

//活动效果切换
$(function () {
    //加载json数据
    var page = 0;
    var resJ;
    var nowpage = 1;
    var li1 = $(".action-slider>ul>li").eq(0);
    $.get("js/act.json", function (res) {
        resJ = res;
        page = Math.ceil(res.length / 4);
        go(nowpage);
        $("#act-page").text(page);
        return true
    }, 'json');
    $(".act-next").eq(0).click(function () {
        if (nowpage == page) {
            nowpage = 1;
        } else {
            nowpage++;
        }
        go(nowpage);
    });
    $(".act-prev").eq(0).click(function () {
        if (nowpage == 1) {
            nowpage = page;
        } else {
            nowpage--;
        }
        go(nowpage);
    });
    function go(index) {
        var ps = '';
        if (index == page) {
            for (var i = (index - 1) * 4; i < resJ.length; i++) {
                ps += '<p>' +
                    '<a href="#">' +
                    '<img alt="' + resJ[i].tip + '" src="' + resJ[i].img + '"/>' +
                    '</a>' +
                    '<span>' + resJ[i].tip + '</span>' +
                    '</p>'
            }
        } else {
            for (var i = (index - 1) * 4; i < index * 4; i++) {
                ps += '<p>' +
                    '<a href="#">' +
                    '<img alt="' + resJ[i].tip + '" src="' + resJ[i].img + '"/>' +
                    '</a>' +
                    '<span>' + resJ[i].tip + '</span>' +
                    '</p>'
            }
        }
        $("#act-now").text(nowpage);
        li1.html(ps);
    }
});


$(function () {
    var catA = $(".cate-action").eq(0);
    var p = $(".pet-active").eq(0);
    p.on("mouseenter", function (e) {
        $(this).addClass("hov");
        catA.css("display", "block");
    });
    p.eq(0).on("mouseleave", function (e) {
        //console.log($(e.relatedTarget));
        if ($(e.relatedTarget).parents(".cate-action").length != 0 || ($(e.relatedTarget).hasClass("cate-action"))) {
            return;
        }
        $(this).removeClass("hov");
        catA.css("display", "none");
    });
    catA.on("mouseenter", function () {
        catA.css("display", "block");
    });
    catA.on("mouseleave", function () {
        catA.css("display", "none");
        p.removeClass("hov");

    })
})

function chicklogin() {
    if ($.cookie("username")) {
        $("#h-login").text($.cookie("username")).attr("href", "javascript:;");
        $("#register1").css("display", "block");
        $("#register").css("display", "none");
        return true;
    } else {
        $("#h-login").text("[登录]").attr("href", "login.html");
        $("#register1").css("display", "none");
        $("#register").css("display", "block");
        return false;
    }
  }
     chicklogin();
$("#register").click(function () {
    if (quit()) {
        $("#register").text("退出").attr("href", "javascript:;");
    } else {
        $("#register").text("[注册]");
    }
});
function quit() {
    $.cookie("username", null, {expires: -1});
    return chicklogin();
}
$(function () {
    var toTop = $('#toTop');
    $(window).scroll(function () {
        if (parseInt($(document).scrollTop()) > (window.innerHeight)) {
            toTop.css('display', 'block');
        } else {
            toTop.css('display', 'none');
        }
    });
    toTop.on('click', function () {
            $('html,body').animate({scrollTop: '0'}, 800);
        }
    );
    $('.rtcont').on('mouseenter', 'li', function () {
        if ($(this).children().eq(0).is('label')) {
            $(this).children('label').eq(0).css('display', 'block').stop(true).animate({
                right: '35px',
                opacity: 1
            }, 500)
        }
    });
    $('.rtcont').on('mouseleave', 'li', function () {
        if ($(this).children().eq(0).is('label')) {
            $(this).children('label').eq(0).stop(true).animate({
                right: '53px',
                opacity: 0
            }, 500, function () {
                $(this).css('display', 'none');
            })
        }
    })

    $('.rtl').on('mouseenter',function () {
        if ($(this).children().eq(0).is('.bagBox')) {
            $(this).children('.bagBox').eq(0).css('display', 'block').stop(true).animate({
                right: '35px',
                opacity: 1
            }, 500)
        }
    });
    $('.rtl').on('mouseleave',function () {
        if ($(this).children().eq(0).is('.bagBox')) {
            $(this).children('.bagBox').eq(0).stop(true).animate({
                right: '53px',
                opacity: 0
            }, 500, function () {
                $(this).css('display', 'none');
            })
        }
    })
});


$(function () {
    $('.main-title').on('mouseenter', 'span', function () {
        $(this).addClass('hov').siblings().removeClass('hov');
        $('.main-list-l').children().eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    })
})
function toDesktop(sUrl,sName){
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink =          WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    }
    catch(e)  {
        alert("当前IE安全级别不允许操作！");
    }
}

//dl>dd 左侧栏滑出
(function(){
    var slider_left1=$("dd>div");
    var dd=$("dl>dd");
    dd.hover(function(){
        var index = $(this).index();
        slider_left1.eq(index).stop().animate({left:"-30px"},{queue:false,duration:200});
    },function(){
        var index = $(this).index();
        slider_left1.eq(index).stop().animate({left:"0px"},{queue:false,duration:200});
    });
})()
