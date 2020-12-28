//fadeOut faz a imagem desaparecer podemos colocar como parametro a velocidade dessa animação ou podemos deixar vazio
$('.course_inner').fadeOut('slow');


//faceIn faz o elemento aparecer na tela
$('.course_inner').fadeIn(2000, function(){
    $('.course_list_items .course_inner:eq(2)').css({
        border: '3px  solid red',
        borderRadius: '10px' 
    })
}); 


//aqui faz a div que contem a classe 'course_inner' assim que ela aparece executa uma função que altera o css da div que tem a classe 'course_inner'
$('.course_inner').fadeIn(300, function(){

    $('.course_list_items:eq(1) .course_inner:eq(0)').css({
        backgroundColor: '#48ab38',
        borderRadius: '10px'
    })

});

//determina a opacidade de um elemento
$('img').fadeTo(2000, 0.5)


//animação fadeToggle esconde ou mostra o elemento é uma animação diferente da toggle, é basea da na opacidade e vai escondendo o elemento aos poucos3456
$('.btn-toggle').on('click', function(){
    $(this).prev('.course_inner').fadeToggle(150, function(){
        console.log('escondi ou apareci');
    })
})

$('#esconde').on('click', function(){
    $('.course_list').toggle(200);
})