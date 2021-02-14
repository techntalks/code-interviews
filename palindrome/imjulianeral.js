// Code written by Jorge Julián Acero Lomelí (@imjulianeral)

const word = 'anita lava la tina'
const cleanWord = word.replace(/\s/g, '')
let counter = 0
let reversed = []

for (let i = cleanWord.length - 1; i >= 0; i--) {
  reversed[counter++] = cleanWord[i]
}

if (cleanWord === reversed.join('')) {
  console.log(`${word} is a palindrome`)
} else {
  console.log(`${word} is not a palindrome`)
}
