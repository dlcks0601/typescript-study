## 데이터 타입과 추론

데이터 타입이 왜 중요한가?

-   자바스크립트의 변수에는 어떤 데이터 타입의 값도 할당될 수 있다.
    -   let myname = 'lee';
    -   let myname = 1;
-   자바스크립트는 이러한 문제를 사전에 막지 못한다.

### 타입 추론(Type Inference) 기능

-   타입스크립트는 타입 추론 기능을 통해 변수의 타입을 자동으로 판단할 수 있다.
-   타입스크립트 컴파일러가 초기에 할당된 값을 바탕으로 변수의 타입을 추론한다.
    -   let age = 30
-   타입스크립트는 age 변수의 타입을 자동으로 number로 추론한다.
-   타입추론은 코드를 간결하게 작성할 수 있도록 도와주지만 타입을 명시적으로 지정하는 것이 더 명확하다.
-   타입추록이 모호한 경우나 복잡한 로직에서는 타입을 명시하는 것이 좋다.

## 데이터 타입의 종류

-   타입스크립트에서는 다양한 데이터 타입을 지원
-   데이터 타입은 크게 기본 데이터 타입, 객체 타입, 특수 타입으로 나눌 수 있음

#### 기본 데이터 타입

-   `number`: 숫자 타입으로, 정수와 실수를 포함
-   `string`: 문자열 타입
-   `boolean`: 참, 거짓을 나타내는 불리언 타입
-   `null`: 값이 없음을 나타내는 타입
-   `undefined`: 값이 할당되지 않은 변수의 기본값인 타입

#### 객체 타입

-   `object`: 객체를 나타내는 타입
-   `array`: 동일한 타입의 요소를 가진 배열을 나타내는 타입
-   `tuple`: 각 요소가 다른 타입을 가질 수 있는 배열을 나타내는 타입

#### 특수 타입

-   `any`: 어떠한 타입이든 할당될 수 있는 타입
-   `unknown`: 타입을 미리 알 수 없는 경우 사용되는 타입

### 타입 명시

-   변수를 선언할 때 변수 값의 타입을 명시함으로써 변수의 데이터 타입을 지정한다.

### 리터럴 타입

-   숫자 리터럴 타입
-   불리언 리터럴 타입
-   객체 리터럴 타입

-   리터럴 타입을 사용하면 좋은 점
    -   코드의 가독성이 높아짐
    -   잘못된 값이 들어오는 것을 방지
