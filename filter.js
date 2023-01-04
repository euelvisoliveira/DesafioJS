/*
  FILTER
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array APENAS com os elementos filtrados
    - Aceita 3 parâmetros
      - item do array
      - index
      - array completo

*/

const list = [
  { name: 'Rodolfo', vip: true },
  { name: 'Maria', vip: false },
  { name: 'João', vip: true },
  { name: 'Bruno', vip: true },
  { name: 'Carla', vip: false },
  { name: 'Ana', vip: true },
  { name: 'Julio', vip: false }
]

const justVips = list.filter((client) => {
  return client.vip
})

console.log(justVips)

const students = [
  { name: 'Elvis', testGrade: 7 },
  { name: 'Elton', testGrade: 8 },
  { name: 'Elidinai', testGrade: 9 },
  { name: 'Maria', testGrade: 10 },
  { name: 'Carla', testGrade: 6 },
  { name: 'Elidinai', testGrade: 2 },
  { name: 'Maria', testGrade: 4 },
  { name: 'Carla', testGrade: 5 }
]

const newStudentsList = students.filter((student) => {
  return student.testGrade <= 7
})

console.log(newStudentsList + 'reprovado')
