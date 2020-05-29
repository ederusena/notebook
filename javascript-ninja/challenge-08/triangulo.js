function triangulo(a,b,c) {
    return (a === b && b === c) && 'equilateral' ||
    (a === b || a === c || b === c) && 'isosceles' ||
    'scalene';
  }

  console.log(triangulo(3,3,3))
  console.log(triangulo(3,2,1))
  console.log(triangulo(3,3,2))