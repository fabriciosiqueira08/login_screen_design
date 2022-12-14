let email = "joão@hcode.com.br";

email = 'glaucio@hcode.com.br';

console.log ( email );
console.log ( 'O seu email é:' + email );
console.log ( `O seu email é: ${email}`);


document.getElementById('btn-submit').addEventListener('click', event => {
    console.log('Clicou no botão');
});

document.getElementById('form-login').addEventListener('mouseenter', event => {
    console.log('Mouse entrou no formulário');
});

document.querySelector('#form-login').addEventListener('mouseleave', event => {
    console.log('Mouse saiu do formulário');
});

document.querySelector('#form-login').addEventListener('submit', event => {
    event.preventDefault();
    console.log('Formulário enviado! Aqui vai o Ajax.');
});