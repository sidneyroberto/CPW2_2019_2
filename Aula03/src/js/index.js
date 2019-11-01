/**
 * Nosso BD fake!
 * (in memory DB)
 */
var contatos = [
    {
        nome: 'Sidney Roberto Bragança Álvares',
        telefone: '(67) 92873-7374',
        email: 'sidney@email.com',
        dataNascimento: '29/02/2003'
    },
    {
        nome: 'Lucas Negri',
        telefone: '(67) 92929-2929',
        email: 'lucas@email.com',
        dataNascimento: '12/01/1971'
    },
    {
        nome: 'Leandro Oliveira',
        telefone: '(67) 93373-2929',
        email: 'leandro@email.com',
        dataNascimento: '03/11/1982'
    },
    {
        nome: 'Daiane Sampaio',
        telefone: '(67) 92822-9832',
        email: 'daiane@email.com',
        dataNascimento: '23/10/2008'
    },
    {
        nome: 'Marcia Cristaldo',
        telefone: '(67) 98367-1010',
        email: 'marcia@email.com',
        dataNascimento: '03/10/1969'
    }
];
renderizarTabelaContatos();
renderizarCardsContatos();

function salvarContato(event) {
    // Inibe a recarga da página
    event.preventDefault();

    /**
     * $ -> document.querySelector
     * val() -> value
     */
    // Recupera os valores do formulário
    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();

    // Criar um objeto de contato
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    // Adiciona o contato no nosso BD (no final do vetor)
    contatos.push(contato);

    // Invoca a renderização da tabela
    renderizarTabelaContatos();

    // Invoca a renderização dos cards
    renderizarCardsContatos();
}

function renderizarTabelaContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('tabelaContatos');

        /**
         * Limpa a área de listagem
         */
        areaListagemContatos.innerHTML = '';

        /**
         * Cria a tabela
         */
        let tabela = document.createElement('table');

        let cabecalho = criarCabecalhoTabela();
        // Adiciona o cabeçalho dentro da tabela
        tabela.appendChild(cabecalho);

        let corpoTabela = criarCorpoTabela();
        // Adiciona o corpo da tabela na tabela
        tabela.appendChild(corpoTabela);

        // Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);
    }
}

function criarCabecalhoTabela() {
    /**
    * Cria o cabeçalho da tabela
    */
    let cabecalho = document.createElement('thead');
    let linhaCabecalho = document.createElement('tr');
    let colunaNome = document.createElement('th');
    colunaNome.innerText = 'Nome';
    let colunaTelefone = document.createElement('th');
    colunaTelefone.innerText = 'Telefone';
    let colunaEmail = document.createElement('th');
    colunaEmail.innerText = 'E-mail';
    let colunaDataNasc = document.createElement('th');
    colunaDataNasc.innerText = 'Data Nasc.';

    // Adiciona as colunas na linha do cabeçalho
    linhaCabecalho.appendChild(colunaNome);
    linhaCabecalho.appendChild(colunaTelefone);
    linhaCabecalho.appendChild(colunaEmail);
    linhaCabecalho.appendChild(colunaDataNasc);

    // Adiciona a linha do cabeçalho no cabeçalho
    cabecalho.appendChild(linhaCabecalho);

    // Retorna o cabeçalho criado
    return cabecalho;
}

function criarCorpoTabela() {
    /**
     * Cria o corpo da tabela
     */
    let corpoTabela = document.createElement('tbody');

    /**
     * Cria a linhas de contatos
     */
    for (let i = 0; i < contatos.length; i++) {
        /**
         * Cria uma nova linha no corpo da tabela
         */
        let linha = document.createElement('tr');

        let celulaNome = document.createElement('td');
        celulaNome.innerText = contatos[i].nome;
        linha.appendChild(celulaNome);
        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = contatos[i].telefone;
        linha.appendChild(celulaTelefone);
        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = contatos[i].email;
        linha.appendChild(celulaEmail);
        let celulaDataNasc = document.createElement('td');
        celulaDataNasc.innerText = contatos[i].dataNascimento;
        linha.appendChild(celulaDataNasc);

        // Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }

    return corpoTabela;
}

function renderizarCardsContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('cardsContatos');

        /**
         * Ao invés de usar um loop,
         * utilizaremos a função forEach
         */
        contatos.forEach(function (contato) {
            let card = document.createElement('div');
            let inicialNome = document.createElement('span');
            inicialNome.innerText = contato.nome.charAt(0);
            let nome = document.createElement('span');
            let tamanhoNome = contato.nome.length;
            nome.innerText = contato.nome.substr(1, tamanhoNome);
            let telefone = document.createElement('span');
            telefone.innerText = contato.telefone;
            let email = document.createElement('span');
            email.innerText = contato.email;
            let dataNasc = document.createElement('span');
            dataNasc.innerText = contato.dataNascimento;

            card.appendChild(inicialNome);
            card.appendChild(nome);
            card.appendChild(telefone);
            card.appendChild(email);
            card.appendChild(dataNasc);
            areaListagemContatos.appendChild(card);
        });

    }
}