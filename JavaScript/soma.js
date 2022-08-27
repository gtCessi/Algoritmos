/*
Escreva um algoritmo para ler dois valores. Após a leitura deve-se calcular a soma dos valores lidos e
armazená-la em uma variável. Após o cálculo da soma, escrever o resultado e escrever também a
pergunta 'Novo Cálculo (S/N)?'. Deve-se ler a resposta e se a resposta for 'S' (sim), deve-se repetir
todos os comandos (instruções) novamente, mas se a resposta for 'N' (não), o algoritmo deve ser
finalizado escrevendo a mensagem 'Fim dos Cálculos'.
*/

let resposta = 's';
let contador = 0;

function respostaFinal() {
  let calcResposta = Math.random() - 0.5; // 50% de chances de ser positivo/negativo

  if (calcResposta > 0) {
    resposta = 's';
    console.log('Sim');
  } else {
    resposta = 'n';
    console.log('Nao');
    console.log('Fim dos calculos.');
  }
}

while (resposta === 's') {
  let number1 = Math.floor(Math.random() * 1000);
  let number2 = Math.floor(Math.random() * 1000);

  let soma = number1 + number2;
  contador++;
  console.log(`Soma ${contador}: ${number1} + ${number2} = ${soma}`);

  console.log('Queres calcular de novo?');
  respostaFinal();
}
