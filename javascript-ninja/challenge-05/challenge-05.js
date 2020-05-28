/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//
let arr = [1,3,4,5,6]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
const retornaArr = arr => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(retornaArr(arr[1]));
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
const retornaArrIndex = (arr,index) => arr[index];
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
const arr2 = [1, true, 'Eder', [1,2], {nome: 'sena'}, (arg) => arg * 2]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(retornaArrIndex(arr2,1));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?
const book = (bookName) => {
    let livros = {
        'senhor dos aneis': {
          quantidadePaginas: 396,
          autor: 'Eder Bifum',
          editora: 'Sega'
        },
        'harry potter': {
            quantidadePaginas: 258,
            autor: 'Bicho Piruleta',
            editora: 'Maga'
        },
        'game of thrones': {
            quantidadePaginas: 5,
            autor: 'MM chocolate',
            editora: 'John Snow'
        }
    }
    return !bookName ? livros : livros[bookName];
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(book())
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log(`O livro harry potter tem ${book('harry potter').quantidadePaginas} páginas!`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`O autor do livro harry potter é ${book('harry potter').autor}.`)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(`O livro harry potter foi publicado pela editora ${book('harry potter').editora}.`)