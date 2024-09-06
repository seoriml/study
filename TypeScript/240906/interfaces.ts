// interfaces.ts

// 구조적 타이핑
interface A {
  name: string;
}

interface B {
  name: string;
  age: number;
}

let objA: A = { name: "Alice" }; // B 타입의 obj를 A 타입으로 사용 가능

// interface 키워드를 사용한 객체 정의
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 30 };

// 인터페이스 확장
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let dog: Dog = { name: "Rover", breed: "Labrador" };

// 인터페이스 병합
interface Merged {
  name: string;
}

interface Merged {
  age: number;
}

let merged: Merged = { name: "John", age: 30 };
