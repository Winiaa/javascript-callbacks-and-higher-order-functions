const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

// 1. สร้างฟังก์ชันเพิ่มเงินเดือน 5,000 บาท
function addSalary5000(previousSalary) {
  return previousSalary + 5000;
}

// 2. สร้างฟังก์ชัน forEach
function forEach(array, operation) {
  const newSalaries = [];

  for (let i = 0; i < array.length; i++) {
    newSalaries.push(operation(array[i]));
  }

  return newSalaries;
}

// 3. เรียกใช้ฟังก์ชัน forEach
const newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

// 4. แสดงผลลัพธ์
console.log(newEmployeeSalaries);

// คำตอบคำถาม

/* Callback Function คือ addSalary5000
 จุดสังเกต: เป็นฟังก์ชันที่ถูกส่งเข้าไปเป็น Argument
 ของฟังก์ชัน forEach เพื่อให้ forEach เรียกใช้งานอีกที */

/* Higher Order Function คือ forEach
 จุดสังเกต: เป็นฟังก์ชันที่รับ Callback Function
 เข้ามาผ่าน Parameter ชื่อ operation */
