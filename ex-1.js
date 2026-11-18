// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  return previousSalary + 5000;
}

function forEach(array, operation) {
  // Start coding here
  let newEmployeeSalaries = [];
  for (let i = 0; i < array.length; i++) {

     // 1. Call operation with array[i]
     let newSalary = operation(array[i]);

    // 2. Store the returned salary in newSalaries
    newEmployeeSalaries.push(newSalary);


  }

  return newEmployeeSalaries;
}

// Using `forEach` function here

const newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);




console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
callback function is addSalary500 because we pass them into another function

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
highest order function is forEach because it receives another function as an argument

====================================
*/
