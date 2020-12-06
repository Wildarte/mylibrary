//evento para qundo precionarmos o mouse
//$('h1').mousedown(function(){
//    console.log("Apertei o mouse")
//})

//evento para quando soutar o botão do mouse
//$('h1').mouseup(function(){
//    console.log('soutei o mouse');
//})

//o evento click faz o evento mousedown e mouseup ao mesmo tempo

//usando o tradicional evento click
//$('h3.books').click(function(){
//    $(this).text("Fui clicado");
//})

//evento com o botao direito do menu
//$(document).contextmenu(function(){
//   alert('clicamos com o botão direito')
//})

//evento de duplo clique
//$('table tbody tr').dblclick(function(){
//    $(this).css({
//        background: 'black',
//        color: 'white'
//    })
//});

//o evento mouseenter acontece quando o cursor "passa por cima" de um elemento
//$('table tbody tr').mouseenter(function(){
//    $(this).addClass('trselected');
//})

//evento para quando o cursor deixa um elemento
//$('table tbody tr').mouseleave(function(){
//    $(this).removeClass('trselected');
//})

//evento para quando o cursor entra e deixa o elemento
$('table tbody tr').hover(function(){
    $(this).addClass('trselected');
}, function(){
    $(this).removeClass('trselected');
})


//evento para quando o mouse se movimenta dentro de um elemento
//$('table tbody tr').mousemove(function(event){
//    $('h1').text(`Voce está na posição x ${event.pageX}; y ${event.pageY}`);
//})
