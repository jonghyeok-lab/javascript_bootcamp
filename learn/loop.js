// 배열
const data = ['Dave', 10, true];

for (let item of data) {
    console.log(item);
}

const data1 = {
    name: 'Dave',
    age: 30,
    brand: "fun-coding",
    get_message() {
        return 'Hello'
    }
}

for (let property of data1) {
    console.log(property); // name, age, brand, get_message()
    console.log(data[property]); // 'Dave, 30 ...'
}

Object.values(data1)