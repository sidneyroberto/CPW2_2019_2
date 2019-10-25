/**
 * Nosso BD fake!
 * (in memory DB)
 */
var contatos = [
    {
        nome: 'Sidney Roberto Bragança Álvares Cabral',
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
}

function renderizarTabelaContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos =
            document.getElementById('listagemContatos');

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