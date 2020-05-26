const array = [
  { nome: '...', preco: 24, desconto:0.4 },
  { nome: '...', preco: 2347, desconto:0.1 },
  { nome: '...', preco: 10000, desconto:0.6 },
  { nome: '...', preco: 3456, desconto:0.1 },
  { nome: '...', preco: 10, desconto:0.3 },
  { nome: '...', preco: 21.4, desconto:0.5 },
  { nome: '...', preco: 99999, desconto:0.1 },
]

function getCusto(precoComDesconto){
  return Math.round(precoComDesconto * 0.3)
}

function getPrecoComDesconto(produto) {
  return Math.round(produto.preco * (1 - produto.desconto))
}

function getPrecoAlto(produto){
  return produto.preco > 999;
}
const resultado = array
  .filter(getPrecoAlto)
  .map(getPrecoComDesconto)
  .map(getCusto)

console.log(resultado)