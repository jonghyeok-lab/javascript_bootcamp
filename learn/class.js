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

// ES6 클래스
class User1 {
    constructor() {
        this.name = "Dave";
        this.age = 30;
    }

    get_message() {
        return 'Hello!';
    }
}
const dave = new User1();
console.log(typeof dave, dave.name, dave.age);

// 외부에서 프로퍼티 선언
class Animal {
    constructor(name) {
        this.name = name;
    }

    get_name() {
        return name;
    }
}

const tiger = new Animal('tiger');
Animal.prototype.age = 10;