const url = "http://localhost:3000/todos";
console.log(1);
console.log(1);

/* DOM 요소 선택 */
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

/* Todo 항목 생성 */
const createTodoUi = (todoData) => {
  //li 요소 생성 및 ID 설정
  const $li = document.createElement("li");
  $li.id = todoData.id;

  //todo 내용을 표시하는 span 요소 생성
  const $todoText = document.createElement("span");
  $todoText.textContent = todoData.todo;

  //삭제하기 버튼 생성
  const $delButton = document.createElement("button");
  $delButton.textContent = "삭제하기";
  $delButton.classList.add("delete-btn");

  //수정하기 버튼 생성 및 이벤트 설정
  const $editButton = document.createElement("button");
  $editButton.textContent = "수정하기";
  $editButton.classList.add("edit-btn");
  console.log(10);
  $editButton.addEventListener("click", () => {
    //prompt를 통해 사용자에게 수정할 내용을 입력받음
    const editTodoText = prompt(
      "수정할 todo내용을 입력해주세요:",
      todoData.todo
    );
    //사용자가 입력한 값이 존재하고 공백 제거 후 최소 글자 수보다 길 경우, 수정 요청을 서버로 보냄
    const minTextLength = 1;
    if (editTodoText && editTodoText.trim().length >= minTextLength) {
      //서버에 PATCH 요청으로 전송하여 Todo 항목을 수정하고 화면에 반영
      fetch(url + "/" + todoData.id, {
        method: "PATCH", // PUT:내용을 아예 갈아끼울때, PATCH:일부만 수정할때,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: editTodoText,
        }),
      })
        //JSON 형식의 데이터가 포함된 Promise를 반환
        .then((res) => {
          return res.json();
        })
        //JSON 형식으로 파싱된 데이터(editedTodoData)를 받아와서 실제 Todo 항목의 내용을 화면에 업데이트
        .then((editedTodoData) => {
          $todoText.textContent = editedTodoData.todo;
        })
        .catch((err) => {
          console.error(err);
          alert("전송에 실패했습니다.");
        });
    } //사용자가 취소 버튼을 눌렀을경우
    else if (editTodoText === null) {
      alert("수정이 취소 되었습니다.");
    } //길이가 충족되지 않을 경우
    else {
      alert(minTextLength + "글자 이상 입력해야합니다.");
    }
  });

  /* 체크박스 생성 및 초기 상태 설정 */
  const $checkBox = document.createElement("input");
  $checkBox.setAttribute("type", "checkbox");
  $checkBox.classList.add("edit-checkbox");
  $checkBox.checked = todoData.done;

  // 각 요소 추가
  $ul.appendChild($li);
  $li.appendChild($todoText);
  $li.appendChild($delButton);
  $li.appendChild($editButton);
  $li.appendChild($checkBox);
};

const getTodos = async () => {
  const res = await fetch(url);
  const todoDatas = await res.json();
  return todoDatas;
};

/* 최초에 화면에 todo를 그려주는 함수 */
const initTodo = async function () {
  const todoDatas = await getTodos();
  todoDatas.forEach((todoData) => {
    createTodoUi(todoData);
  });
};
initTodo();

/* Todo 추가 함수 */
const addTodo = async function (todoTxt) {
  try {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todoTxt, done: false }),
    });
    const newTodoData = await req.json();
    return newTodoData;
  } catch (error) {
    alert("서버에 이상이 있습니다.");
  } finally {
    console.log("실패 성공 상관없이 무조건 실행");
  }
};

$form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const todoTxt = $input.value;
  const newTodoData = await addTodo(todoTxt);
  createTodoUi(newTodoData);
  $input.value = "";
});

/* Todo 삭제 함수 */
const deleteTodo = async (id) => {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return res.status === 200;
  } catch (error) {
    //예외처리 하면 좋음
  }
};

/* Todo 삭제와 수정을 위한 이벤트 리스너를 추가 */
$ul.addEventListener("click", async (e) => {
  if ([...e.target.classList].includes("delete-btn")) {
    const parentNode = e.target.parentNode;
    const isDelete = await deleteTodo(parentNode.id);
    if (isDelete) {
      parentNode.remove();
    } else {
      alert("잘못된 요청입니다.");
    }
  }
  if ([...e.target.classList].includes("edit-checkbox")) {
    //이벤트가 발생한 요소의 클래스 리스트에 "edit-checkbox" 클래스가 포함되어 있는지 확인
    const todoId = e.target.parentNode.id;
    //체크박스의 부모 요소인 <li>의 id를 가져와서 todoId 변수에 저장
    const checked = e.target.checked;
    //체크박스의 체크 여부를 확인하여 checked 변수에 저장
    const editedTodo = await editStatus(todoId, checked);
    //editStatus 함수를 호출하여 Todo 항목의 완료 상태를 서버에 업데이트
    if (typeof editedTodo.done === "boolean") {
      return;
    }
    e.target.checked = editedTodo.done;
  }
});

/* 체크박스 상태 변경 함수 */
const editStatus = async function (id, checked) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: checked,
      }),
    });
    const editedTodo = await res.json();
    return editedTodo;
  } catch (error) {}
};
