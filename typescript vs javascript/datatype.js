"use strict";
// 변수의 데이터 타입 명시
let stdId = 1111;
let stdName = 'lee'; // stdNmae에서 stdName으로 수정
let age = 20;
let gender = 'male';
let course = 'typescript';
let completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
class MyStudent {
    constructor() {
        this.stdId = 91011;
        this.stdName = 'park'; // stdNmae에서 stdName으로 수정
        this.age = 30;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    setName(name) {
        this.stdName = name;
        console.log('이름설정 : ' + this.stdName);
    }
}
const myInstance = new MyStudent();
myInstance.setName('엘리스');
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee', // stdNmae에서 stdName으로 수정
        gender: GenderType.Female,
        course: 'javascript',
        completed: true,
    };
}
let std = {
    stdId: 91011,
    stdName: 'park', // stdNmae에서 stdName으로 수정
    age: 30,
    gender: 'male',
    course: 'node.js',
    completed: true,
};
function setInfo(student) {
    console.log(student);
}
// setInfo(std);
// console.log(getInfo(5678));
const user = {
    name: 'john',
    age: 25,
};
let numStr = '100';
let item;
function convertToString(val) {
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val);
}
function convertToNumber(val) {
    return Number(val);
}
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
// let numbers: number[] = [1, 2, 3, 4, 5];
// let fruits: string[] = ['apple', 'banana', 'orange'];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// 배열의 유니온 타입
// let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];
// for (let i = 0; i < mixedArray.length; i++) {
//     console.log(mixedArray[i]);
// }
// let infer = [1, 2, 3];
// for (let i = 0; i < infer.length; i++) {
//     console.log(infer[i]);
// }
// let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
// let greeting: [number, string, boolean] = [1, 'hello', true];
// for (let i = 0; i < greeting.length; i++) {
//     console.log(greeting[i]);
// }
// Spread 연산자
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combineArray = [...firstArray, ...secondArray];
for (let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
