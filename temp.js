const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
students.forEach((student) => console.log(student.name, student.grade));
console.log(
  students
    .filter((student) => student.grade >= 80)
    .map((student) => student.name)
);

const topStudents = students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student.name));
const youngStudents = students
  .filter((student) => student.age <= 21)
  .forEach((student) => console.log(student.name));
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];
console.log("Product Price and Name");
const product_name_price = products.forEach((product) =>
  console.log(product.name, product.price)
);
console.log("Products with a 10% increase");
const price_increase = products.forEach((product) =>
  console.log(product.name, Math.round((product.price *= 1.1)))
);
console.log("Rating of 4.5 and Above");
const highRated = products
  .filter((product) => product.rating >= 4.5)
  .forEach((product) => console.log(product.name));

console.log("Products under $1000 and are Electronics");
const Electronics = products
  .filter(
    (product) => product.category === "Electronics" && product.price < 1000
  )
  .forEach((product) => console.log(product.name));
