/*각각 HTML 문서에서 input, button, ul, form 요소를 선택하여 할당*/
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");
const $form = document.querySelector("form");

/*fetchTodos라는 이름의 비동기 함수를 선언, async funtion 서버와 통신하려는 함수*/
const fetchTodos = async function () {
  const res = await fetch("http://localhost:3000/todos");
  //URL에서 데이터를 가져오고 todos 변수에 할당, await 키워드는 비동기 작업이 완료될 때까지 함수의 실행을 일시 중지
  const todos = await res.json();
  //가져온 데이터를 JSON 형식으로 파싱한 후, todos 변수에 할당
  todos.forEach((todo) => {
    //각 todo 항목에 대해 반복
    const $li = document.createElement("li"); //새로운 li 요소를 생성
    $ul.appendChild($li); //$ul에 추가
    $li.innerText = todo.todo; //각 li 요소의 텍스트 내용은 todo.todo로 설정
  });
};

fetchTodos();

/*입력 필드에서 사용자가 입력한 내용을 가져와서 새로운 todo를 생성하고 서버로 전송*/
const addTodos = function () {
  const todoInput = $input.value; //입력 필드에 입력된 값을 가져옴
  const newTodoData = {
    todo: todoInput,
    done: false,
  };
  //newTodoData 객체를 생성하여 todo와 done 속성을 설정
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTodoData),
  });
  //주소로 POST 요청을 보냄. body에는 newTodoData 객체를 JSON 문자열로 변환하여 전송.
};

/*$form 요소에 대해 submit 이벤트 리스너를 등록*/
$form.addEventListener("submit", function (e) {
  e.preventDefault(); //submit 이벤트가 발생하면 기본 동작을 막고
  addTodos(); // addTodos 함수를 호출하여 새로운 todo를 추가
});
