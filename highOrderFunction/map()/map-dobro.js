const arr = [1,2,3,4,5]
const dobro = (num) =>  num * 2;

const arrDobro = arr.map(value => dobro(value))
const arrDobro2 = arr.map(dobro)
console.log(arrDobro)
console.log(arrDobro2)