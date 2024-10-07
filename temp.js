const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
students.forEach((student) => console.log(student.name, student.grade));
const topStudents = students
  .filter((student) => student.grade > 80)
  .forEach((student) => {
    topStudents.push(student.age);
  });

console.log(topStudents);
