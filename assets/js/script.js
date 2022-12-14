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
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };    

    if (!json.email) {

        console.error("O campo e-mail deve ser preenchido");

    } else if (!json.password) {

        console.error("O campo password deve ser preenchido");
    } else {
            
            console.info("Dados validos e enviados com sucesso!");
        }

});