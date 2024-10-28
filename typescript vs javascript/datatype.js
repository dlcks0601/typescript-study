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
        this.gender = GenderType.Male;
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
    gender: GenderType.Male,
    course: 'node.js',
    completed: true,
};
function setInfo(student) {
    console.log(student);
}
setInfo(std);
// console.log(getInfo(5678));
