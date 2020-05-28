/*
Crie um array com 5 items (tipos variados).
*/
// ?
let arr = [1,true,'2', 'Eder Sena', [1,2]]
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// ?
const addItem = item => {
    arr.push(item)
    return arr
}
/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
console.log(addItem(['cachorro',1]))
/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// ?
console.log(`O segundo elemento do segundo array é ${arr[5][1]}.`)
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O primeiro array tem ${arr.length} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?
console.log(`O segundo array tem  ${arr[5].length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
let x = 10;
while(x <= 20){
    if(x % 2 === 0){
    console.log( `Números pares entre 10 e 20: ${x}`);
    }
    x += 1;
}
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
let y = 10;
while(y <= 20){
    if(y % 2 === 1){
    console.log( `Números impares entre 10 e 20: ${y}`);
    }
    y += 1;
}
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for (let index = 100; index <= 120; index++) {
    if( index % 2 === 0){
        console.log( `Números pares entre 100 e 120: ${index}` );
    }
}

// ?
for (let index2 = 111; index2 < 125; index2++) {
    if( index2 % 2 === 1){
        console.log( `Números ímpares entre 111 e 125: ${index2}` );
    }
}
// ?