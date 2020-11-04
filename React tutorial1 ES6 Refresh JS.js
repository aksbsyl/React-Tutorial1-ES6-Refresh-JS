function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //console.log(i);
}
sayHello();

const person = {
  name: "Ram",
  age: 25,
  isMarried: false,
};

console.log(person);

//Higher order array method in JS
let user = [
  { id: 1, name: "Ram", age: 20 },
  { id: 2, name: "Shyam", age: 25 },
  { id: 3, name: "Hari", age: 30 },
];

console.log(user);

// foreach method (not used much)
for (let j = 0; j < user.length; j++) {
  console.log(user[j].name);
}

user.forEach(function (user, index, alluser) {
  console.log(user);
  console.log(index);
  console.log(alluser);
});

//map in JS
let userData = user.map(function (user, index, alluser) {
  return user;
});

console.log(user);
console.log(userData);

//filter in JS
let filterData = user.filter(function (data) {
  // We need to pass callback funciton in filter. We pass function as parameter. We can pass 3 parameters, but basically we need to pass at least  parameter
  return data.id === 2;
});
console.log(filterData);

//spreadoperator in JS
let arr1 = [1, 2, 3];
let arr2 = [arr1, 4, 5, 6];
let arr3 = [...arr1, 4, 5, 6];
console.log(arr2);
console.log(arr3);

let person1 = {
  name: "Aakash",
  age: 25,
};

let person2 = {
  ...person1,
  job: "Programmer",
};
console.log(person2);

//Destructuring in JS
const person3 = {
  name: "Hari",
  hobbies: ["programmming", "chatting", "football"],
  address: {
    street: "ktm",
    city: "ktm",
  },
};
console.log(person3.hobbies[0]);
/*console.log(person3.address.city);
console.log(person3.address.street);*/
const { street, city } = person3.address;
console.log(city);
console.log(street);

//classes in js
class Employee {
  constructor(name, experience, age) {
    this.name = name;
    this.experience = experience;
    this.age = age;
  }
}
hari = new Employee("Hari", 2, 25);
shyam = new Employee("Hari", 2, 30);
console.log(hari);
console.log(shyam);

class Programmer extends Employee {
  constructor(name, experience, age, language) {
    super(name, experience, age);
    this.language = language;
  }
}

aakash = new Programmer("aakash", 2, 25, "javascript");
console.log(aakash);
