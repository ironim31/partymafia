$(function(){
    $('.area').on('click',function(){
        console.log( $(this).next());
        $(this).next().slideToggle();
    })
})