// solution.js

/**
 * 주어진 점이 어느 사분면에 속하는지 판단하는 함수
 * 
 * @param {number[]} dot - 점의 좌표 배열, dot[0]은 x, dot[1]은 y
 * @returns {number} - 사분면 번호 (1, 2, 3, 4)
 */
function solution(dot) {
    var answer = 0;
    
    // 사분면 판별
    if (dot[0] > 0 && dot[1] > 0) {
        answer = 1;  // 1사분면
    } else if (dot[0] < 0 && dot[1] > 0) {
        answer = 2;  // 2사분면
    } else if (dot[0] < 0 && dot[1] < 0) {
        answer = 3;  // 3사분면
    } else if (dot[0] > 0 && dot[1] < 0) {
        answer = 4;  // 4사분면
    }
    
    return answer;
}

// 예시 실행
console.log(solution([1, 2]));  // 1
console.log(solution([-1, 2])); // 2
console.log(solution([-1, -2])); // 3
console.log(solution([1, -2]));  // 4
