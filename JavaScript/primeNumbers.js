function verificaNumeroPrimo(numero) {
  let contador = 0;
  let divisores = [1];

  if (numero === 2) {
    return console.log('O numero 2 é primo.');
  } else {
    for (let i = 2; i < numero; i++) {
      if (numero % 2 === 0) {
        return console.log(`O numero ${numero} nao é primo, pois é par.`);
      } else if (numero % i === 0) {
        divisores.push(i);
        contador++;
      }
    }

    if (contador > 0) {
      return console.log(
        `O numero ${numero} nao é primo e tem ${
          contador + 1
        } divisores: ${divisores}`
      );
    } else {
      return console.log(`O número ${numero} é primo.`);
    }
  }
}

verificaNumeroPrimo(957);
verificaNumeroPrimo(987);
verificaNumeroPrimo(927);
verificaNumeroPrimo(997);
