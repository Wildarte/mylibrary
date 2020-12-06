//evento para quando pressionamos uma tecla
//$('#form_login [name=username').keydown(function(event){
//    console.log(`Você pressionou a tecla com um código ${event.keyCode}`);
//})

//evento de quando soutar a tecla
//$('#form_login [name=username]').keyup(function(event){
//    console.log(`Você soltou a tecla ${event.keyCode}`);
//})

//keypress e keydown são parecidos, mas tem diferenças, se eu precisar usar esse comando eu pesquiso a diferença
$('#form_login [name=username]').keypress(function(event){
    console.log(`Você pressionou a tecla ${event.keyCode}`);
})