document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        if (!validarCampoPreenchido(nomeInput)) {
            mostrarErro(nomeInput, 'Deve conter até 50 caracteres.');
        } else {
            ocultarErro(nomeInput);
        }

        if (!validarEmail(emailInput.value)) {
            mostrarErro(emailInput, 'Envie um e-mail válido');
        } else {
            ocultarErro(emailInput);
        }

        if (!validarCampoPreenchido(mensagemInput)) {
            mostrarErro(mensagemInput, 'Deve conter até 300 caracteres.');
        } else {
            ocultarErro(mensagemInput);
        }

        // Verifica se todos os campos estão preenchidos corretamente
        if (validarCampoPreenchido(nomeInput) && validarEmail(emailInput.value) && validarCampoPreenchido(mensagemInput)) {
            alert('Mensagem Enviada com sucesso!')
        }
    });

    nomeInput.addEventListener('input', function() {
        if (nomeInput.value.trim().length > 0 && nomeInput.value.trim().length <= 50) {
            ocultarErro(nomeInput);
        }
    });
    emailInput.addEventListener('input', function() {
        if (validarEmail(emailInput.value)) {
            ocultarErro(emailInput);
        }
    });
    mensagemInput.addEventListener('input', function() {
        if (mensagemInput.value.trim().length > 0 && mensagemInput.value.trim().length <= 300) {
            ocultarErro(mensagemInput);
        }
    });

    function validarCampoPreenchido(campo) {
        return campo.value.trim() !== '' && campo.value.trim().length <= 50;
    }

    function validarEmail(email) {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    function mostrarErro(campo, mensagem) {
        const erroElemento = campo.nextElementSibling;
        if (erroElemento && erroElemento.classList.contains('erro-mensagem')) {
            erroElemento.textContent = mensagem;
        } else {
            const novoErroElemento = document.createElement('div');
            novoErroElemento.classList.add('erro-mensagem');
            novoErroElemento.textContent = mensagem;
            campo.parentNode.insertBefore(novoErroElemento, campo.nextElementSibling);
        }
        campo.classList.add('error');
    }

    function ocultarErro(campo) {
        const erroElemento = campo.nextElementSibling;
        if (erroElemento && erroElemento.classList.contains('erro-mensagem')) {
            erroElemento.remove();
        }
        campo.classList.remove('error');
    }
});
