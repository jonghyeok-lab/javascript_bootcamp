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