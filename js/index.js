//  عشان اخلي العنصر ياخد طول 100% كل ما اتحكمت ف حجم الشاشه
// window
$(function () {
    // adjust slider height
    var winh = $(window).height(),
        upph = $('.upper-bar').innerHeight(),
        navh = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winh - (upph + navh));

    // Featured - swer Work shuffle
    $('.Featured-Work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        // الفانكشن الي بتغير مع الضغط  active^^^^
        if ($(this).data('class') === 'all') {
            $('.swer .col-md').css('opacity', 1);
        } else {
            $('.swer .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1)
        }
    })
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $("#btntop").fadeIn();
            }
            else {
                $("#btntop").fadeOut();
            }
        });
        $("#btntop").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 800)
        });
        // active nav bar 
    $('.navbar-nav .nav-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        // الفانكشن الي بتغير مع الضغط  active^^^^

    })
    $('.navbar-nav .dropdown-menu .dropdown-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        // الفانكشن الي بتغير مع الضغط  active^^^^
       
    })
});
