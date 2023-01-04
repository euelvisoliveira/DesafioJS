/*
  MAP
    - Criar um novo array, a partir do array percorrido (array original)
    - Criar um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
      - item do array 
      - index
      - array completo
*/

const numbers = [1, 2, 3, 4]
const students = [
  { name: 'Elvis', age: 23 },
  { name: 'Elton', age: 27 },
  { name: 'Elidinai', age: 25 },
  { name: 'Maria', age: 43 },
  { name: 'Carla', age: 13 }
]

// const newArray = numbers.map((number) => {
//  return number * 2
// })

const newStudents = students.map((student) => {
  const newStudent = {
    name: student.name + ' da Silva ',
    age: student.age - 5
  }
  return newStudent
})
console.log(newStudents)

const double = (number) => number * 2
const toReais = (number) => `R$ ${number.toFixed(2)}`

const newArray = numbers.map(double).map(toReais)

console.log(newArray)
