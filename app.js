alert("boas vindas ao jogo do numero secreto");

let numeroMaximo = 1000;
let NumeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let NumeroEscolhido;
let tentativas = 1;

while (NumeroEscolhido != NumeroSecreto){
    let NumeroEscolhido = parseInt(prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
    if (NumeroEscolhido == NumeroSecreto){
        break;
    }else {
        if (NumeroEscolhido > NumeroSecreto){
            alert("o numero e menor");
        }else {
            alert("o numero e maior");
        }
    }
    tentativas++;
}

let testa_tentativa = (tentativas > 1) ?  "tentativas" : "tentativa";
alert(`parabens voce acertou o numero ${NumeroSecreto} com ${tentativas} ${testa_tentativa}`);

