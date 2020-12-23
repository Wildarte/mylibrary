let entries = 100;

$('.register').append(`<u> - Ainda restam ${100 - entries} vagas</u>`);

$('#form_login [type=submit]').on('click', function(e){

    e.preventDefault();

    alert('voce foi cadastrado, parabéns!')

})


//nesse if caso entries seja maior ou igual a 100 será retirado desligado o evento click
if(entries >= 100){

    $('#form_login [type=submit]').off('click'); //o método off pode ser usado para desligar um evento
        
}