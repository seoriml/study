// solution.js

/**
 * 세균의 수가 1시간마다 두 배씩 증가하는 문제
 * @param {number} n - 초기 세균의 수
 * @param {number} t - 경과한 시간
 * @returns {number} - t시간 후의 세균 수
 */
function solution(n, t) {
    var answer = n * Math.pow(2, t); // 2^t만큼 증식한 세균 수 계산
    return answer;
}
