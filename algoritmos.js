// 1) Implemente um método que crie um novo array baseado nos valores passados.
function novoArray(quantidade, valor) {
  return Array(quantidade).fill(valor);
}

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
function arrayInverso(array) {
  let inverso = [];
  for (let index = array.length - 1; index >= 0; index--) {
    inverso.push(array[index]);
  }
  return inverso;
}

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
function limpar(array) {
  return array.filter((item) => typeof item === "number" && item !== 0);
}

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
function arrayParaObjeto(array) {
  return array.reduce((acumulador, valorAtual) => {
    acumulador[valorAtual[0]] = valorAtual[1];
    return acumulador;
  }, {});
}

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
function limpar2(array, item1, item2) {
  return array.filter((item) => item !== item1 && item !== item2);
}

// 6) Implemente um método que retorne um array, sem valores duplicados.
function semDuplicados(array) {
  const unicos = new Set(array);
  return [...unicos];
}

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
function arraysIguais(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) return false;
  }
  return true;
}

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
function arrayUnico(array) {
  return array.reduce((acumulador, valorAtual) => {
    return acumulador.concat(valorAtual);
  }, []);
}

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
function dividirArray(array, quantidade) {
  let arrayFinal = [];
  while (array.length !== 0) {
    arrayFinal.push(array.splice(0, quantidade));
  }

  return arrayFinal;
}

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
function elementoComum(array1, array2) {
  return array1.filter((item) => array2.includes(item));
}

function main() {
  console.log("(1) - ", novoArray(3, "a"));
  console.log("(2) - ", arrayInverso([1, 2, 3, 4, 5, 6, 7]));
  console.log("(3) - ", limpar([1, 2, "", undefined, 0, null, -5, false]));
  console.log(
    "(4) - ",
    arrayParaObjeto([
      ["c", 2],
      ["d", 4],
    ])
  );
  console.log("(5) - ", limpar2([5, 4, 3, 2, 5], 5, 3));
  console.log("(6) - ", semDuplicados([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));
  console.log("(7) - ", arraysIguais([1, 2, 3, 4, 5], [1, 2, 3, 4, 7]));
  console.log("(8) - ", arrayUnico([1, 2, [3], [4, 5]]));
  console.log("(9) - ", dividirArray([1, 2, 3, 4, 5], 3));
  console.log("(10) - ", elementoComum([6, 8, 7, 10, 20], [8, 9, 6, 7]));
}

main();
