// 변수의 데이터 타입 명시

let stdId: number = 1111;
let stdName: string = 'lee'; // stdNmae에서 stdName으로 수정
let age: number = 20;
let gender: string = 'male';
let course: string = 'typescript';
let completed: boolean = false;

// 열거형 : 사용자 정의 타입

enum GenderType {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral',
}

// 함수의 데이터 타입 명시(매개변수, 리턴타입)

interface Student {
    stdId: number;
    stdName?: string; // stdNmae에서 stdName으로 수정
    age?: number;
    gender?: GenderType;
    course?: string;
    completed?: boolean;
    setName?: (name: string) => void;
}

class MyStudent implements Student {
    stdId = 91011;
    stdName = 'park'; // stdNmae에서 stdName으로 수정
    age = 30;
    gender = GenderType.Male;
    course = 'node.js';
    completed = true;

    setName(name: string): void {
        this.stdName = name;
        console.log('이름설정 : ' + this.stdName);
    }
}

const myInstance = new MyStudent();
myInstance.setName('엘리스');

function getInfo(id: number): Student {
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

function setInfo(student: Student): void {
    console.log(student);
}

setInfo(std);

// console.log(getInfo(5678));
