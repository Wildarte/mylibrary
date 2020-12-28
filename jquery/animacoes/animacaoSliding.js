/*$('.btn-toggle').on('click', function(){

    $(this).prev('.course_inner').slideUp();

})
*/
//$(element).slideUp(1000); //define o efeito slideUp para o elemento, efeito que desliza para cima e some

//$(element).slideDown(1000); //define o efeito slideDown para o elemento, efeito que faz o elemento aparecer deslizando para baixo;

//o método slideToggle permite abrir ou fechar o elemento
$('.btn-toggle').on('click', function(){

    $(this).prev('.course_inner').slideToggle(300, function(){

        console.log('Apareci ou desapareci');

    })

})


$('#disable_effects').on('click', function(){
    //o jQuery.fx.off é uma propriedade que se for verdadeira desabilita as animações
    jQuery.fx.off = !jQuery.fx.off; //essa linha está atribuindo o valor contrário doque ela tem
})