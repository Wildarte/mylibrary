
//aqui usamos um namespace para definir nesse evento dessa forma podemos desligar esse evento em especifico caso precisemos
$('p').on('click.removeRed', function(){

    $(this).toggleClass('selected_section');

});

$('p').on('click', function(){
    $(this).toggleClass('underline_section');
});

$('#btn_remove_css_color').on('click', function(){
    $('p').off('click.removeRed');
});