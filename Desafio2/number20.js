//Crie 5 objetos nesse formato {nome: "" idade:"" sexo:"" profissão: "" nacionalidade:""}Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

const person = {
  nome: 'Elvis',
  idade: '17',
  sexo: 'male',
  profissão: 'Programador',
  nacionalidade: 'Brasileiro'
}

if (
  person.idade >= 18 &&
  (person.nacionalidade === 'Brasileiro' ||
    person.nacionalidade === 'Brasileira')
) {
  console.log('Você passou no processo')
} else {
  console.log('Você NÃO passou no processo')
}
