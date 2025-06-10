let notas = [5.0 , 6.7 , 4.0 ,6.0]
let aux = 0
let x = 0
let tam = 0

for (let i = 0; i < notas.length; i++) {
  aux = notas[i]
  x = x + aux
}

tam = notas.length
aux = x/tam

console.log(aux)