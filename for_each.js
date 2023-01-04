/*
  FOR EACH é uma ferramenta muito poderosa, ele serve para percorrer um ARRAY, e ele é uma função

  const students = [
  { name: 'Elvis', age: 23 },
  { name: 'Elton', age: 27 },
  { name: 'Elidinai', age: 25 },
  { name: 'Maria', age: 43 },
  { name: 'Carla', age: 13 }
]

let allStudentsAge = 0

students.forEach((student, index) => {
  allStudentsAge += student.age
})

const averageAge = allStudentsAge / students.length

console.log(` A media dos alunos é de ${averageAge.toFixed(0)}`)
*/

const students = [
  { name: 'Elvis', age: 23 },
  { name: 'Elton', age: 27 },
  { name: 'Elidinai', age: 25 },
  { name: 'Maria', age: 43 },
  { name: 'Carla', age: 13 }
]

let allStudentsAge = 0

students.forEach((student, index) => {
  console.log(
    `O aluno chama-se ${student.name}, tem ${student.age} anos e esta na posição ${index} do Array`
  )
})
