function printName(name = 'Dave') {
    console.log(name)
}

printName() // Dave
printName('Lee') // Lee

const data = {
    name: 'Dave',
    age: 30,
    hobby: 'soccer'
};

// 갖고오고 싶은 프로퍼티 이름만 선언해서 가져올 수 있다. -> 구조 분해 문 법
const {name, age} = data;
console.log(name, age) // Dave, 30

let data3 = [1, 2, 3]
const [item1, item2, item3, item4] = data; // 1, 2, 3, undefined
const [, , item3, item4] = data; // 3, undefined
const [, , item3, item4='Dave'] = data; // 3, Dave

// 함수 리턴시 여러 데이터 넘겨주기
function getData() {
    return [1, 2, 3];
}

let [a, b, c] = getData();

// 동기 비동기
/* 비동기 작업
Rest API 요청
파일/DB 처리
타이머, 암호화/복호화
 */

// 타이머 : setTimeout(function, milliseconds)
console.log('안녕하세요');
setTimeout(() => console.log('Dave Lee'), 3000);
console.log("잔재미코딩");

