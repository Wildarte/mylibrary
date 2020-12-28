//$(element).hide(2000);//esconde o elemento, podemos deixar sem numero ou colocar um numero entre parenteses que é contado em milesegundos

//$(element).show(2000);//mostra o element, podemos deixar sem numero ou colocar um numero entre parenteses que é contado em milesegundos

//a função toggle é uma função que pode ser usada para animações simples
$('.btn-toggle').on('click', function(){

    $(this).prev('.course_inner').toggle(200)

})