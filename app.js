alert('Bem-vindo ao jogo do Número Secreto');
let numeroSecreto = 7;
let chute = parseInt(prompt('Escolha um número entre 1 e 10'));

while (chute !== numeroSecreto) {
    if (chute > numeroSecreto) {
        chute = parseInt(prompt('Escolha um número menor. Tente novamente:'));
    } else {
        chute = parseInt(prompt('Escolha um número maior. Tente novamente:'));
    }
}
alert('Isso aí! Você acertou o CR7');