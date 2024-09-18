import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "1", todo: "아침먹기" },
    { id: "2", todo: "점심먹기" },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: (state.length + 1).toString(),
        todo: action.payload,
      };
      // 새 투두 항목 추가
      state.push(newTodo);
      // 항목이 5개를 초과하면 가장 오래된 항목 제거
      if (state.length > 5) {
        state.shift();
      }
    },
    setTodoText: (state, action) => {
      // 상태 업데이트 로직 (선택적)
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
