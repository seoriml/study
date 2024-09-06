// functions.ts

// 기본 함수 예제
function add(firstNum: number, secondNum: number): number {
  return firstNum + secondNum;
}

// 선택적 매개변수와 void
function logMessage(message: string): void {
  console.log(message);
}

// never 타입
function throwError(message: string): never {
  throw new Error(message);
}

// 객체 생성
let obj: { name: string; age: number } = { name: "Alice", age: 25 };
