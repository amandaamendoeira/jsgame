
alert ("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto); // Sua principal função é imprimir mensagens no console do ambiente de desenvolvimento.
let tentativas = 1;
let chute; // preciso que o valor que a pessoa digitou fique armazenado

//enquanto o chute não for igual ao numero secreto | != é diferente, não é igual

while (chute != numeroSecreto) {
    let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) { //tudo o que escrever aqui só será executado caso o numero secreto for igual ao chute
        break;
    } 
    if (chute > numeroSecreto) {
        alert('O número secreto é menor')
    } else {
        alert('O número secreto é maior')
    }
    tentativas++; //tentativas = tentativas + 1 | para atribuir mais 1
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' // tentativas maior que 1? | : é se não
alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}.`); //colocando o numero secreto dessa forma, vai mudar toda vez no prompt


//Operadores: operador AND, representado pelos símbolos "&&", é utilizado para combinar duas condições e avaliar se ambas são verdadeiras | O operador OR, representado pelos símbolos "||", é usado para verificar se pelo menos uma das condições é verdadeira
