var botaoEnviar = document.querySelector('#enviar-contato');
botaoEnviar.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-contato');
    
    //Extrai informações do form
    var contato = obtemDados(form);

    //Exibe mensagens de erro
    var erros = validaDados(contato);
    if (erros.length > 0) {
        exibeMensagensErro(erros);
        return
    }

    if (!validaDados(contato)) {
        console.log('Inválido');
        return;
    }

    var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});

function exibeMensagensErro (erros) {
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = "";

    erros.forEach (function(erro){
       var li = document.createElement('li');
       li.textContent = erro;
       ul.appendChild(li);
    });
}

function obtemDados(form) {
    var contato = {
        nome: form.nome.value,
        email: form.email.value,
        assunto: form.assunto.value,
        mensagem: form.mensagem.value
    }

    return contato;
}

function validaEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validaDados(contato) {
    var erros = [];
    

    if(contato.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if(contato.nome.length > 50){
        erros.push("Tamanho do nome excedido digite até 50 caracteres")
    }

    if(contato.email.length == 0){
        erros.push("O email não pode ser em branco");
    }
    if(!validaEmail(email)){
        erros.push("Email inválido");
    }

    if(contato.assunto.length == 0){
        erros.push("O assunto não pode ser em branco");
    }
    if(contato.assunto.length > 50){
        erros.push("Tamanho do assunto excedido digite até 50 caracteres")
    }

    if(contato.mensagem.length == 0){
        erros.push("A mensagem não pode ser em branco");
    }
    if(contato.mensagem.length > 300){
        erros.push("Tamanho da mensagem excedido digite até 50 caracteres")
    }

    return erros;
}


