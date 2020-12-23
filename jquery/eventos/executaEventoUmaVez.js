$('#books_list').append('<u> - Marque seus favoritos</u>');


//o método one permite executar o evento apenas uma vez
$('#books_list tbody tr').one('click', function(){

    if(!$(this).hasClass('trselected')){

        $(this).addClass('trselected');

    }else{
        $(this).removeClass('trselected');
    }

})