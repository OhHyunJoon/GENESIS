$(function(){
    $('.category').click(function(e){
        e.preventDefault();
        $('.page2 .list1').toggle()
    })
    $('.footer .button').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({
            scrollTop : 0
        }, 1000)
    })
}) 