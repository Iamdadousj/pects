/**
 * Created by  on 2018/1/26.
 *
 * 雷兵
 *
 */
function cart(res, id, num) {
    var numn;
    if (num) {
        numn = num
    } else {
        numn = 1;
    }
    numn = parseInt(numn);
    var same = false;
    var goodStr = '';
    var goodsl = 1;
    var cont = 0;
    var goods;
    if ($.cookie("goods")) {
        goods = $.parseJSON($.cookie("goods"));
        goodsl = goods.length;
        for (var i = 0; i < goods.length; i++) {
            if (goods[i].id == id) {
                same = true;
                goods[i].num += numn;
                break;
            }
        }
        if (!same) {
            var goodstr = {"id": id, "num": numn};
            goods.push(goodstr);
            goodsl++;
        }
        $.cookie("goods", JSON.stringify(goods));
    } else {
        goodStr = '[{"id":"' + id + '","num":"' + numn + '"}]';
        $.cookie("goods", goodStr);
    }
    goods = $.parseJSON($.cookie("goods"));
    //获取总额(￢_￢)
    for (var i in goods) {
        for (var j in res) {
            if (res[j].id == goods[i].id) {
                //console.log(res[j].id);
                cont += (res[j].price[1] * goods[i].num);
                cont = Math.round(cont * 100) / 100;  //解决浮点数精度的问题
                //console.log(cont);
                break;
            }
        }
    }
    $("#goodsl").text(goodsl);
    $("#goodscont").text(cont + "元");
    $("#dialog").css("display", "block");
    $(".dia-con").css("display", "block");
}



