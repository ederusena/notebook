// Inicialização com "New"
var palpite = new Array(2, 18, 20, 53, 65);
console.log(palpite)

// Verificar se a variável é um array
var valorRetornado = Array.isArray(palpite);

// Substituir elemento do array
palpite[1] = 10;

// Encontrar o indice de um elemento
valorRetornado = palpite.indexOf(53);
console.log(valorRetornado);

// MODIFICAÇÃO DE ARRAYS


// ACRESCENTAR ELEMENTO NO FINAL DO ARRAY
palpite.push(60)
palpite[4] = 24;
console.log(`Valor do array depois do push= ${palpite}`)

// ACRESCENTAR ELEMENTO NO INICIO DO ARRAY
palpite.unshift(5)
console.log(`Valor do array depois do unshift= ${palpite}`)

// REMOVE ELEMENTO DO ARRAY - ULTIMO
palpite.pop();

// REMOVE ELEMENTO DO ARRAY - INICIO
palpite.shift();
console.log(`Valor do array depois do pop e shift= ${palpite}`)

// RETIRAR SEQUENCIA DE ELEMENTOS DO ARRAY
palpite.splice(1,3);
console.log(`Valor do array depois do splice= ${palpite}`)

// INVERTER SEQUENCIA DO ARRAY
palpite.reverse();
console.log(`Valor do array depois do reverse= ${palpite}`)

// CONCATENACAO DE ARRAYS
let palpite2 = [3,2,3]
let conc = palpite.concat(palpite2);
console.log(`Valor do array depois do concat= ${conc}`)
