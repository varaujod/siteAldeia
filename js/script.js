function mostrarInfo(formulario) {
    let nome = formulario.nome.value;
    let sobrenome = formulario.sobrenome.value;
    let email = formulario.email.value;
    let telefone = formulario.telefone.value;
    
    let cidade = "";
    for (let i = 0; i < formulario.cidade.length; i++) {
        if (formulario.cidade[i].checked) {
            cidade = formulario.cidade[i].value;
            break;
        }
    }

    let motivo = formulario.motivo.options[formulario.motivo.selectedIndex].text;
    let mensagem = formulario.mensagem.value;
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `
        <h2>Informações do Contato</h2>
        <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Motivo de Contato:</strong> ${motivo}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
    `;
    resultado.style.display = 'block';
}
