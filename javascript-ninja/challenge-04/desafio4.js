//# Desafio da semana #4


/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
let isTruthy = arg => arg ? true : false

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0))
console.log(isTruthy(""))
console.log(isTruthy(null))

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy('0'))
console.log(isTruthy(1))
console.log(isTruthy(true))
console.log(isTruthy({po:1}))
console.log(isTruthy([1]))
console.log(isTruthy(isTruthy(1)))
console.log(isTruthy("Malakoi"))
console.log(isTruthy("No malakoi do ebraico"))
console.log(isTruthy(1 - 5))
console.log(isTruthy(-8))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `qtdPortas` - Number
- `assentos` - Number - cinco por padrão
- `qtdPessoas` - Number - zero por padrão
*/
let carro = {
    marca: 'GM',
    modelo: 'Corsa',
    placa: 'CLV-8741',
    ano: 1998,
    cor: 'Verde',
    qtdPortas: 4,
    assentos: 5,
    qtdPessoas: 0
}
let {marca, modelo, placa, ano, cor, qtdPortas, assentos, qtdPessoas} = carro
/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = corParam => cor = corParam;

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => cor;

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => modelo;

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => marca;

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = () => `Esse carro é um ${marca} ${modelo}`;

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPassageiro = (passenger) =>  {
    let rP = assentos - qtdPessoas; // resto de Assentos
    let pD = passenger - assentos; // pessoas a mais
    if ( rP < passenger ){
      console.log(`Só ${rP >= 1 ? 'cabem' : 'cabe'} mais ${rP} pessoa${rP >= 1 ? 's' : ''}!`);
      console.log(`Tem ${pD} pessoas a mais do esperado da quantidade disponivel!`);
    }
    if (qtdPessoas >= assentos) {
        console.log(`O carro já está lotado!`)
    }else if(rP >= passenger) {
        qtdPessoas += passenger;
        console.log(`Já temos ${qtdPessoas} pessoa${qtdPessoas > 1 ? 's' : ''} no carro!`);
    }
}
carro.addPassageiro(7)
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro
*/


// Mude a cor do carro para vermelho.


// E agora, qual a cor do carro


// Mude a cor do carro para verde musgo.


// E agora, qual a cor do carro


// Qual a marca e modelo do carro


// Adicione 2 pessoas no carro.


// Adicione mais 4 pessoas no carro.


// Faça o carro encher.


// Tire 4 pessoas do carro.


// Adicione 10 pessoas no carro.


// Quantas pessoas temos no carro

