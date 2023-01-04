/*
  ARRAYS - METODOS
*/

const students = ['Joao', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

// PUSH => ELE SERVE PARA ADCIONAR NOVOS ITENS DENTRO DO ARRAY

// LENGTH => ELE SERVE PARA DIZER O TAMANHO DO ARRAYS (QUANTOS ITENS TEM DENTRO)

// SORT => ELE É USADO PARA ORGANIZAR EM ORDEM ALFABETICA

// DELETE => ELE E USADO PARA DELETAR UM ITEM DO ARRAY

//  SPLICE(UNIR / LIGAR) => ELE PERMITE TIRAR/COLOCAR O ITEM DO ARRAY EXATAMENTE ONDE QUEREMOS (ELE MODIFICA O ARRAY ORIGINAL)
// students.splice(3, 0, 'Elvis')
// console.log(students)

//SLICE(FATIAR) => ELE PERMITE TIRAR O ITEM DO ARRAY OU SEJA FATIAR (ELE NAO MODIFICA O ORIGINAL ELE CRIA UM NOVO ARRAY, POR ISSO PRECISAMOS CRIAR UMA NOVA VARIAVEL PARA ARMAZENAR O NOVO ARRAY QUE ESSE METODO CRIOU)

//POP => ELE TIRA O ULTIMO ITEM DO ARRAY
//SHIFT => ELE TIRA O PRIMEIRO ITEM DO ARRAY

const newStudents = students.slice(1, 5)
console.log(newStudents)