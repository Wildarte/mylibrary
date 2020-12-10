//evento para quando o navegador muda seu tamanho
$(window).resize(function(){
    console.info(`A largura do navegador é ${$(window).width()} A altura do navegador é ${$(window).height()}`);
});

//evento para quando a barra de rolagem se mover
$(window).scroll(function(){

    console.log(`Você está na posiçao ${$(window).scrollTop()}`);

})