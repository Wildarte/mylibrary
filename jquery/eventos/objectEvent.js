$('p').click(function(event){

    //retorna o tipo de evento executado
    //console.log("Voce realizou um evento de: "+ event.type);

    //retorna o nome do elemento que clicamos
    //alert(`Você clicou na tecla <${event.target.tagName}>`);

    //console.log('TARGET ', event.target);
    //console.log('CURRENT TARGET', event.currentTarget);

});

//retorna a posição X e Y do elemento onde ocorreu o evento
//event.pageX, event.pageY

$('[name=bio]').keydown(function(event){

    //retorna o código da tecla
    //console.log(event.keyCode);
    //console.log(event.which);

    if(event.key ===  'Enter'){
        event.preventDefault();
        alert(`Você precionou a tecla ${event.key}`);
    }
    
})

//para a execução padrao do evento
event.preventDefault()

//para a propagação de eventos
event.stopPropagation()