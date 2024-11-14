// solution.js

// 주어진 문자열을 뒤집는 함수
function solution(my_string) {
    // 1. 문자열을 배열로 쪼갠 후
    // 2. 배열을 뒤집고
    // 3. 다시 문자열로 합쳐서 반환
    var answer = my_string.split('').reverse().join('');
    return answer;
}

// 테스트 예시
console.log(solution("hello")); // "olleh"
console.log(solution("world")); // "dlrow"
console.log(solution("abc123")); // "321cba"
