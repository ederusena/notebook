const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

Array.prototype.meuFilter = function (fn) {
  const filtered = []
  for(let el of this){
    if(fn(el)){
      filtered.push(el)
    }
  }
  return filtered
}

Array.prototype.meuMap = function (fn) {
  const mapped = []
  for (let el of this){
    mapped.push(fn(el))
  }
  return mapped
}

Array.prototype.meuReduce = function (fn, inicial) {
  let ultimo = inicial
  for(let el of this){
    if(ultimo === undefined){
      ultimo = el
      continue
    }
    ultimo = fn(ultimo, el)
  }
  return ultimo
}

const qtdeMaiorQueZero = item => item.qtde > 0
const totalItem = item => item.qtde * item.preco
const somar = (a,b) => a + b

const resultado = carrinho
                  .meuFilter(qtdeMaiorQueZero)
                  .meuMap(totalItem)
                  .meuReduce(somar)

console.log(resultado)