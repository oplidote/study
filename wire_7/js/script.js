$(document).ready(function(){
    let sub_menu = $('.gnb > li');
    sub_menu.mouseenter(function(){
        $(this).find('.submenu').stop.slideDown(300);
    });
    sub_menu.mouseleave(function(){
        $(this).find('.submenu').stop.slideUp(300);
    });
});