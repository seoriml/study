/**
 * 피자 한 판에 주어진 조각 수(slice)와 사람 수(n)가 주어질 때,
 * n명이 최소 한 조각씩 먹을 수 있도록 최소 몇 판의 피자가 필요한지 계산하는 함수.
 *
 * @param {number} slice - 피자 한 판에 있는 조각 수
 * @param {number} n - 피자를 먹는 사람의 수
 * @returns {number} - 최소 필요한 피자 판 수
 */
function solution(slice, n) {
    // 필요한 피자 판 수는 n명이 먹을 수 있는 조각 수를 slice로 나눈 후 올림 처리
    var answer = Math.ceil(n / slice); // n / slice를 올림 처리하여 필요한 판 수 계산
    return answer;
}

// 테스트 케이스 예시
console.log(solution(6, 10)); // 출력: 2 (10명이 먹을 수 있는 피자 판 수는 2)
// console.log(solution(8, 5));  // 출력: 1 (5명이 먹을 수 있는 피자 판 수는 1)
// console.log(solution(3, 11)); // 출력: 4 (11명이 먹을 수 있는 피자 판 수는 4)
