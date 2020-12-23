//é possível criar eventos personalizados, é o caso desse eveno 'initPage', foi criado manualmente
$('header').on('initPage', function(){

    $(this).append('Veja bem vindo').css({
        color:  'red',
        left: '100px'
    })

    $(this).find('img').animate({
        width: '400px'
    })

})

setTimeout(function(){
    $('header').trigger('initPage');
}, 1500);