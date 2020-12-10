//esse código vai mudando a cor dos títulos conforme o usuário vai rolando o scroll ta tela
$(window).scroll(function(){

    let position = $(window).scrollTop();

    let sections = ['.title', '.books', '.register'];

    let index;

    if(position < 50){
        index = 0;
    }else if(position < 200){
        index = 1;
    }else if(200 < position < 400){
        index = 2;
    }
    
    $(sections[index]).addClass('trocaColor');
    sections.splice(index, 1);
    $(sections.join(', ')).removeClass('trocaColor');

})