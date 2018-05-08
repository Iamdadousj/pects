/**
 * Created by Administrator on 2018/1/30.
 */
$(function () {
    $("#header").load('header.html',function(){
        $(".main-list-l").children().css("display", "none");
        $("#nav").css("border-bottom", "2px solid #e74085");
        $(".main-list-l").children().on({
            mouseenter: function () {
                $(this).css("display", "block");
            },
            mouseleave: function (e) {
                if ($(e.relatedTarget).parents(".main-list-r").length != 0 ||
                    ($(e.relatedTarget).hasClass("main-list-r")) || $(e.relatedTarget).parents(".cate-action").length != 0 ||
                    ($(e.relatedTarget).hasClass("cate-action"))) {
                    return;
                }
                $(this).css("display", "none");
            }
        })
        $(".main-list-r").on("mouseleave", function () {
            $(".main-list-l").children().css("display", "none");

        })
        $(".cate-action").on("mouseleave", function () {
            $(".main-list-l").children().css("display", "none");
        })
    })
})