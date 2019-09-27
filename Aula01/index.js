/**
 * Imprime uma mensagem no console
 * do browser
 */
console.log('Fala, negada!');
//alert('Fala, negada!');

/**
 * Pega o span cujo id é igual a "mensagem"
 * e coloca na variável mensagem.
 */
var mensagem = document.getElementById('mensagem');

// Coloca um texto dentro do span
mensagem.innerHTML = 'Fala, negada!';

/**
 * Injeta um parágrafo dentro da div
 * "conteiner"
 */

/**
 * Cria uma tag p e salva
 * na variável paragrafo
 */
var paragrafo = document.createElement('p');
paragrafo.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit. Praesent feugiat efficitur 
    urna quis condimentum. Ut sollicitudin diam ac 
    ligula lacinia scelerisque. Fusce placerat 
    justo justo, nec pharetra justo elementum ac. 
    Duis placerat laoreet risus, a lacinia massa 
    vehicula et. Morbi metus magna, ullamcorper in 
    ex at, ultricies tempus nisi. Nulla facilisi. 
    Donec tincidunt diam quis fermentum venenatis. 
    Curabitur efficitur sed tortor vel pretium. 
    Vestibulum ante ipsum primis in faucibus orci 
    luctus et ultrices posuere cubilia Curae; 
    Mauris sit amet arcu nisi.
`;
var conteiner = document.getElementById('conteiner');
/**
 * Anexa a tag de parágrafo dentro da
 * div conteiner
 */
conteiner.appendChild(paragrafo);