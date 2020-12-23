$('h1').on('dblclick', function(){
    $(this).text('Hcode Treinamentos - jQuery');
})


// o método trigger serve para acionar um evento manualmente pelo código
$('h1').trigger('dblclick');

$('#form_login').on('submit', function(e){
    e.preventDefault();
    console.log('Aqui estão os dados digitados ', $(this).serializeArray())
})