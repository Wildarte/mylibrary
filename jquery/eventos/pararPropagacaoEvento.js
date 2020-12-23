$('#form_login').on('change', '[name]', function(){

    alert('Valor do campo: ' + $(this).val());

})

$('#form_login [name=bio]').on('change', function(event){
    
    event.stopPropagation(); //essa linha para com a propagação do evento

    $(this).css('background', 'red');

})