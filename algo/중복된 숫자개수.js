// solution.js

// 주어진 배열에서 n이 몇 번 등장하는지 구하는 함수
function solution(array, n) {
    var answer = 0;
    // 배열을 순회하며 n이 몇 번 등장하는지 셈
    for (var i = 0; i < array.length; i++) {
        if (array[i] === n) {
            answer++;
        }
    }
    return answer;
}

// console.log(solution([1, 2, 3, 4, 2, 2], 2));  // 출력: 3
// console.log(solution([1, 2, 3, 4, 5], 6));    // 출력: 0
