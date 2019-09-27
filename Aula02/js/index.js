function exibirMensagem() {
    let nome = document.getElementById('nome').value;
    let mensagem = nome ? `Olá, ${nome}!` : '';
    document.getElementById('mensagem').innerHTML = mensagem;
}