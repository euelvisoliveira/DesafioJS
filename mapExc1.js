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

const approveStudents = students.map((student) => {
  let aprrovedOrNot

  if (student.testGrade >= 7) {
    aprrovedOrNot = 'aprorved'
  } else {
    aprrovedOrNot = 'disapproved'
  }

  const students = {
    name: student.name,
    finalResult: aprrovedOrNot
  }

  return students
})

console.log(approveStudents)