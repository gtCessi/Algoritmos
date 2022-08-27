/*
Ler as notas de uma turma, calcular a media geral, a media dos aprovados e a media dos reprovados.
Mostrar os aprovados e os reprovados
A media sera dinamica, isso significa que ela sera baseada no desempenho da turma como um todo,
nao sendo fixa. media = Soma das notas / numero da turma -> compara-se o desempenho da turma com a propria turma
*/
turma = [
  ['aluno 1', Math.floor(Math.random() * 10)],
  ['aluno 2', Math.floor(Math.random() * 10)],
  ['aluno 3', Math.floor(Math.random() * 10)],
  ['aluno 4', Math.floor(Math.random() * 10)],
  ['aluno 5', Math.floor(Math.random() * 10)],
  ['aluno 6', Math.floor(Math.random() * 10)],
  ['aluno 7', Math.floor(Math.random() * 10)],
  ['aluno 8', Math.floor(Math.random() * 10)],
  ['aluno 9', Math.floor(Math.random() * 10)],
  ['aluno 10', Math.floor(Math.random() * 10)],
  ['aluno 11', Math.floor(Math.random() * 10)],
  ['aluno 12', Math.floor(Math.random() * 10)],
  ['aluno 13', Math.floor(Math.random() * 10)],
  ['aluno 14', Math.floor(Math.random() * 10)],
  ['aluno 15', Math.floor(Math.random() * 10)],
  ['aluno 16', Math.floor(Math.random() * 10)],
];

let turmaAprovados = [];
let turmaReprovados = [];
let somaNotas = 0;
let somaAprovados = 0;
let somaReprovados = 0;

// media geral da turma
for (let i = 0; i < turma.length; i++) {
  somaNotas += turma[i][1];
}

let media = Math.floor(somaNotas / turma.length);

for (let i = 0; i < turma.length; i++) {
  if (turma[i][1] > media) {
    somaAprovados += turma[i][1];
    turmaAprovados.push(turma[i][0]);
  } else {
    somaReprovados += turma[i][1];
    turmaReprovados.push(turma[i][0]);
  }
}

let mediaAprovados = Math.floor(somaAprovados / turmaAprovados.length);
let mediaReprovados = Math.floor(somaReprovados / turmaReprovados.length);

console.log(`Media geral da turma: ${media}.`);
console.log('');
console.log(`Alunos aprovados: ${turmaAprovados}`);
console.log('');
console.log(`Media dos alunos aprovados: ${mediaAprovados}`);
console.log('');
console.log(`Alunos reprovados: ${turmaReprovados}`);
console.log('');
console.log(`Media dos alunos reprovados: ${mediaReprovados}`);
