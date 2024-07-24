/* HTML 요소 선택 및 변수 할당 */
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

/* 서버에서 Todo 목록을 가져오는 비동기 함수 */
const fetchTodos = async function () {
  const res = await fetch("http://localhost:3000/todos"); //주소로 GET 요청을 보내고, 응답을 res 변수에 저장
  const json = await res.json(); //JSON 형식으로 파싱된 데이터를 json 변수에 저장
  json.forEach((item) => {
    const $li = document.createElement("li");
    $li.textContent = item.todo;
    $ul.appendChild($li);
  });
  //각 Todo 항목마다 새로운 <li> 요소를 생성하고, 해당 요소에 Todo 내용(item.todo)을 추가한 후 $ul 요소에 추가
};
fetchTodos();

/* 사용자가 입력한 Todo 내용을 받아서 서버에 POST 요청을 보내고, 새로운 Todo를 추가하는 비동기 함수 */
const addTodo = async function (todoTxt) {
  try {
    const req = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todoTxt, done: false }),
    });
    //주소로 POST 요청을 보내고, Todo 데이터를 JSON 형식으로 전송

    const newPost = await req.json();
    const $li = document.createElement("li");
    $li.textContent = newPost.todo;
    $ul.appendChild($li);
    //성공적으로 Todo가 추가되면 서버에서 반환한 응답을 newPost 변수에 저장하고,
    //이를 기반으로 새로운 <li> 요소를 생성하여 $ul 요소에 추가
  } catch (error) {
    alert("서버에 이상이 있음");
    //오류가 발생하면 catch 블록에서 오류 메시지를 콘솔에 출력하고 사용자에게 경고창을 표시
  } finally {
    console.log("성공 또는 실패에 관계없이 항상 실행");
    //finally 블록은 성공 또는 실패에 관계없이 항상 실행
  }
};

/* $form 요소에 submit 이벤트 리스너를 등록 */
$form.addEventListener("submit", async function (e) {
  //폼이 제출되면(submit 이벤트 발생 시)
  e.preventDefault(); //기본 동작을 막고
  const todoTxt = $input.value; //입력 필드($input)에 입력된 값을 가져와
  await addTodo(todoTxt); //addTodo 함수를 호출
  $input.value = ""; //사용자가 폼을 제출한 후에 입력 필드를 비우기
});

// TODO:: 완료하기 기능이랑 todo삭제하기 기능해야됩니다.
