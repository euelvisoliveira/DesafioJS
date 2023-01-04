//Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

const number = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    console.log('O numero é maior')
  } else {
    console.log('O segundo é maior')
  }
}

number(2, 3)
