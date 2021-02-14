// Code written by Jorge Julián Acero Lomelí (@imjulianeral)

function TowerOfHanoi(n, fromRod, toRod, auxRod) {
  if (n === 1) return console.log('Move disk', 1, 'from rod', fromRod, 'to rod', toRod)

  TowerOfHanoi(n - 1, fromRod, auxRod, toRod)
  console.log('Move disk', n, 'from rod', fromRod, 'to rod', toRod)
  TowerOfHanoi(n - 1, auxRod, toRod, fromRod)
}

TowerOfHanoi(6, 'A', 'C', 'B')
