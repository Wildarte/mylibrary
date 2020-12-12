//delegação de eventos
//é uma técnica de programação: ao criar um evento, definimos o manipulador em um elemento pai, e não no alvo direto.
//isso é necessário pq as vezes um elemento nao consiga ouvir o evento diretamente
//entao delegamos a um elemento pai, que fica responsável por ouvir o evento

//em que situações:

//ao carregar elementos  HTML de maneira dinâmica
//ao realizar requisições AJAX


//um exemplo muito boom é esse abaixo, colocamos no on() como primeiro parametro o evento click, e como segundo a tag <td>, e no seletor deixamos apenas o #books_list tbody , dessa forma deixamos claro que toda ta <td> após o tbody vai receber o evento
$('#books_list tbody').on('click', 'tr', function(e){

    //$(e.delegateTarget).find('tr').removeClass('trselected');//essa linha e a de baixo fazem basicamente a mesma coisa
    //$('#books_list tbody td').removeClass('trselected');  //essa linha e a de cima fazem basicamente a mesma coisa

    $(this).addClass('trselected');

})

$('#btn_add_book').on('click', function(){

    let tr = `
        <tr>
            <td>Nosso Lar</td>
            <td>André Luis</td>
        </tr>
    `
    $('#books_list tbody').append(tr);

})


//propagação de eventos
//quando acontece um evento específico em um elemento, todos os elementos que estiverem acima dele, vão ficar sabendo, entao se acontecer algo no td, o tr vai saber, o tbody vai saber, o table vai saber, o body vai saber, e o html vai saber