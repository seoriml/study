// basic-types.ts

// string 타입
let str: string = "문자열";

// number 타입
let num: number = 42;
let inf: number = Infinity;
let notANum: number = NaN;

// boolean 타입
let isTrue: boolean = true;
let isFalse: boolean = false;

// bigInt 타입
let bigNum: bigint = 1234567890123456789012345678901234567890n;

// undefined 타입
let value: number | undefined;
value = 5;
value = undefined; // 가능

// null 타입
let nullableValue: number | null = null;

// object 타입
let obj: { name: string; age: number } = { name: "John", age: 30 };

// 배열 타입
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];

// 튜플 타입
let tuple: [string, number] = ["hello", 10];

// 타입 추론
const inferredNum = 1; // number 타입으로 추론됨

// 리터럴 타입
type Status = "pending" | "completed";
let taskStatus: Status = "pending";

// any 타입
let anything: any = "hello";
anything = 10;

// 유니언 타입
let value: string | number;
value = "hello";
value = 10;

// unknown 타입
let unknownValue: unknown;
unknownValue = "hello";
if (typeof unknownValue === "string") {
  console.log(unknownValue.length); // 안전하게 사용
}
