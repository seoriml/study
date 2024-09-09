// 제네릭 사용 예시

interface ApiResponse<T> {
  status: number;
  ok: boolean;
  data: T;
}

interface TodoData {
  todo: string;
  id: number;
}

interface CommentData {
  comment: string;
  writer: number;
}

const todoResponse: ApiResponse<TodoData> = {
  status: 200,
  ok: true,
  data: {
    todo: "Complete TypeScript tutorial",
    id: 1,
  },
};

const commentResponse: ApiResponse<CommentData> = {
  status: 200,
  ok: true,
  data: {
    comment: "Great job!",
    writer: 42,
  },
};

// Enum 사용 예시

enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

enum Status {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}

enum Mixed {
  No = 0,
  Yes = "YES",
}

// Non-Null-Assertion 사용 예시
let nullableString: string | null = null;
let nonNullString: string = nullableString!;

// 인덱스 시그니처 사용 예시
interface Dictionary {
  [key: string]: string;
}

const dict: Dictionary = {
  hello: "world",
  goodbye: "everyone",
};

// keyof 사용 예시
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

// async/await 사용 예시
async function fetchData(): Promise<string> {
  const response = await fetch("https://api.example.com");
  const data = await response.json();
  return data.message;
}

// 타입 단언 사용 예시
let someValue: unknown = "hello";
let strLength: number = (someValue as string).length;

// Record 사용 예시
type UserRoles = Record<string, string>;

const roles: UserRoles = {
  admin: "Admin",
  user: "User",
};

// Partial 타입 사용 예시
interface User {
  id: number;
  name: string;
  email: string;
}

const updateUser: Partial<User> = {
  name: "John",
};
