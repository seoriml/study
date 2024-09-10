// type-aliases.ts

// type 키워드를 사용한 type alias
type Task = {
  id: number;
  key: string;
  todo: string;
  caption?: string; // 선택적 속성
};

let taskData: Task;

// 인터섹션 타입
type human = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};

// 읽기 전용 속성
type ReadOnlyPerson = {
  readonly name: string;
  readonly age: number;
};

let human: ReadOnlyPerson = { name: "John", age: 30 };
