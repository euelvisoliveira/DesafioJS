// Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 10

switch (score) {
  case 0:
    console.log('Foi pessimo')
    break

  case 5:
    console.log('Foi muito ruim')
    break

  case 10:
    console.log('Parabens voce foi otimo')
    break
  default:
    break
}
