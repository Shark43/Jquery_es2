/**
 * Created by simon on 05/10/2017.
 */
$(document).ready(function () {
    var _lampadina = $("#lampadina");
    var _btnAccendi = $("#btnAccendi");
    var _btnSpegni = $("#btnSpegni");
    var _contenuto = $("#contenuto");
    _lampadina.hide();
    _btnSpegni.hide();

    _btnSpegni.hide().on("click", function () {
        _lampadina.fadeOut(3000,function () {
            _lampadina.css({
                "background-color":"#CCC"
            });
            _btnSpegni.hide();
            _btnAccendi.show();
        });
    });
    _btnAccendi.on("click", function () {
       _lampadina.fadeIn(3000,function () {
           _btnSpegni.show();
           _btnAccendi.hide();
       });
        _lampadina.css("background-color","#ffa");
    });

    var contenuto = {
        "margin-left":"140px",
        "width":"600px",
        "border":"1px solid black",
        "margin-top": "10px",
        "padding":"5px"
    };
    _contenuto.hide().css(contenuto);
    $("#descrizione").mouseover(function () {
        _contenuto.slideDown(600,function () {
            $(this).css("background-color","blue");
        });
    });
    $("#descrizione").mouseout(function () {
        _contenuto.slideUp(600, function () {
            $(this).css("background-color","white");
        });
    });
    $("#descrizione").css({
        "width": "160px",
        "height":"40px",
        "text-align":"center",
        "lineHeight":"40px",
        "border-radius":"10px",
        "font-size":"14pt",
        "margin-left":"100px",
        "text-decoration":"underline",
        "background-color":"#AAA",
        "cursor":"pointer"
    })
});