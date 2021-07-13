$(function () {

    
        $("#menu-icon").click(function () {
            $(this).toggleClass("open");
            $("#header-nav").fadeToggle(300);
        });

        $(".header-list").click(function () {
            $("#header-nav").hide();
            $("#menu-icon").removeClass("open")
        });

        $(window).resize(function() {
            //リサイズされたときの処理
            if (window.matchMedia("(min-width: 768px)").matches) {
                $("#header-nav").show();
            }else{
                $("#header-nav").hide();
            }
        });
        

    $("#mainvisiual").hide().fadeIn(1000);

    $(window).scroll(function () {
        var wHeight = $(window).height();
        var scrollAmount = $(window).scrollTop();
        $('.container').each(function () {
            var targetPosition = $(this).offset().top;
            if (scrollAmount > targetPosition - wHeight + 150) {
                $(this).addClass("fadein");
            }
        });
    });






});