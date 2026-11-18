
const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];

const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];

const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];


// 1. Create checkGradeOver70 function
function checkGradeOver70(score) {
    return score > 70;
}


// 2. Create atLeastFive function
function atLeastFive(array, operation) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (operation(array[i])) {
            count++;
        }
    }

    return count >= 5;
}


// 3. Execute atLeastFive function
const scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);

const scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);

const scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);


// 4. Console.log results
console.log(scoreRoom1Result); // true
console.log(scoreRoom2Result); // false
console.log(scoreRoom3Result); // false


// 5. Answer the questions

/* Callback Function: checkGradeOver70
จุดสังเกต: เป็นฟังก์ชันที่ถูกส่งเข้าไปเป็น Argument
ของ Higher Order Function ผ่าน Parameter ชื่อ operation */

/* Higher Order Function: atLeastFive
จุดสังเกต: เป็นฟังก์ชันที่รับฟังก์ชันอื่นเข้ามาเป็น Parameter
และสามารถเรียกใช้งานฟังก์ชันนั้นภายในตัวเองได้ */
