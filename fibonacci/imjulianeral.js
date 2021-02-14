// Code written by Jorge Julián Acero Lomelí (@imjulianeral)

// Without Recursion:
let sequence = []

for (let i = 0; i < 10; i++) {
  if (i <= 1) sequence = [...sequence, i]
  else {
    const currentNumber = sequence[i - 1]
    const previousNumber = sequence[i - 2]

    sequence = [...sequence, currentNumber + previousNumber]
  }
}
console.log(sequence)

// With Recursion:
const fibonacci = N => {
  if (N === 0 || N === 1) return N

  return fibonacci(N - 2) + fibonacci(N - 1)
}

for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i))
}
