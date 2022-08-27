/* Escrever um algoritmo para comer uvas*/

let numUvas = Math.floor(Math.random() * 50);

function comerUvas(numUvas) {
  console.log('Comendo uvas =)');
  for (let i = 0; i < numUvas; i++) {
    numUvas -= 1;
  }
  console.log(`Comi ${numUvas} uvas. Estavam deliciosas =)`);
}

comerUvas(numUvas);
