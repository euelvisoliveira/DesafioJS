// Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.

const number = 10

if (number % 2 === 0) {
  if (number % 5 === 0) {
    console.log('O numero é par e divisível por 5')
  } else {
    console.log('O numero é par e NÂO é divisível por 5')
  }
} else {
  for (let i = 2; i < number; i++)
    if (number % i === 0) {
      console.log('Ele é impar, mas não é primo')
      break
    } else {
      if (i === number - 1) {
        console.log('Ele é um número primo')
      }
    }
}
