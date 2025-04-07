// 배열 생성
const arr1 = [0, 1, 2, 3, 4]
arr1.splice(1, 3); // [0, 4]

// 배열 끝에 아이템 추가
const myArr = [0, 1, 2, 3];
myArr.push(5); // [0, 1, 2, 3, 5]
let number = myArr.pop(); // number 은 5

let number1 = myArr.shift(); // number은 0, myArr [1, 2, 3]


// 배열 합치기
const arr2 = [0, 1];
const arr3 = [0, 2];
const result = arr2.concat(arr3); // 0, 1, 0, 2

// 문자열 합치기
const arr2 = [0, 1, "hi"];
const rs = arr2.join("*"); // 0*1*hi

// 현재 배열을 역순 변경
arr2.reverse();

// 배열의 일부분 반환
arr2.slice(0, 1) // 0부터 0까지 아이템 인덱스 추출

// 인덱스 찾을 때
const student = [
    {
        name: "Lee",
        age: 20
    },
    {
        name: "AHN",
        age: 15
    }
];

console.log(student.indexOf("AHN")) // -1
console.log(student.findIndex(item => item.name === "AHN")) // 1
console.log(student.find(item => item.name === "AHN")) // name: "AHN", age:15

