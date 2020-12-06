//evento para quando o elemento receber o fóco
//$('[name]').focus(function(){
//    $(this).css({
//        background: 'yellow'
//    })
//})

//evento para quando o elemento perder o fóco
//$('[name]').blur(function(){
//    alert('Você digitou: ' + $(this).val());
//})

//quando tira o fócu de um elemento
//$('[name]').focusout(function(){
//    $(this).css({
//        background: 'none'
//    })
//});

//evento para quando o elemento recebe o fócu, mesmo que seja um elemento filho
//$('.form-group').focusin(function(){
//    console.log('Você selecionou o campo');
//})

//evento para quando o campo mudar o seu valor, pode ser muito usado com os inputs do tipo select, radio etc.
//$('[name]').change(function(){
    
//})


//evento para quando selecionar o valor de um campo no formulário
//$('[type=text]').select(function(){
//    console.log('você selecionou o valor deste campo')
//})


$('form').submit(function(event){
    event.preventDefault()
})

//parando o comportamento padrão da página com o object event
$('#link-logo').click(function(event){
    event.preventDefault();
    $(this).find('img').attr('src', 'img/logo-jquery.png');
})