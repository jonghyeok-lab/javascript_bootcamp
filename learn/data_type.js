console.log('hete');

// # 변수
let testValue = 1;
console.log(typeof testValue);

// null
let testValue2 = 2;
console.log(typeof testValue2, testValue2);
// 결과 : object, null

// Symbol
let testSymbol1 = Symbol(1);
let testSymbol2 = Symbol(1);
console.log(typeof testSymbol1, testSymbol1);
console.log(typeof testSymbol2, testSymbol2);

// 함수
function printName(name) {
    console.log(name);
}

// Arraw 함수
let func = name => 'Hello, ' + name;
console.log(func('종혁'));

// 객체 리터럴 생성 방식
const user = {
    age: 20,
    name: "AHN",
    get_date: function() {
        return 1 + 2;
    }
};
console.log(typeof user, user); // object = {age: 20, name: "AHN}
console.log(user.age); // 20
console.log(user.name); // AHN
console.log(user.get_date()); // 3
user.nickname = "Nickname"; // 가능

// 객체안에 객체
const detailUser = {
    age: 10,
    name: 'AHN',
    details: {
        hobby: 'coding',
        major: "korean"
    }
}

// getter setter
const user1 = {
    age: 10,
    name: "dave",

    get get_age() {
        return this.age;
    },
    set set_age(value) {
        this.age = value;
    }
}

console.log(user1.get_age);
user1.set_age(20);