// generics.ts

// 제네릭
interface ReqData<T> {
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

const todoData: ReqData<TodoData> = {
  status: 200,
  ok: true,
  data: {
    todo: "Finish homework",
    id: 1,
  },
};

const commentData: ReqData<CommentData> = {
  status: 200,
  ok: true,
  data: {
    comment: "Nice post!",
    writer: 1,
  },
};
