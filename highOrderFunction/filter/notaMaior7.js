const notas = [7.1, 8.3, 6.3, 7.7, 9.1, 4.3]

function notaMaior(nota){
  return nota >= 7
}

const result = notas.filter(notaMaior)
console.log(result)