//criando animações personalizadas
$('h1').animate({
    fontSize: '50px'
}, 600);

$('.course_inner h3').hover(function(){
    $(this).animate({
        textShadow: '2px 2px 3px red'
    }, 200);
    $(this).next('button').addClass('.btn-lg')
    
}, function(){
    $(this).animate({
        fontSize: '-=3px'
    },200)
})