// solution.js

/**
 * 주어진 정수 배열의 평균값을 계산하여 반환하는 함수
 * 
 * @param {number[]} numbers - 평균을 구할 정수 배열
 * @return {number} 평균값
 */

/* 방법 1: for문을 사용한 평균 계산 */
function solutionForLoop(numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    var answer = sum / numbers.length;

    return answer;
}

/* 방법 2: reduce 메서드를 사용한 평균 계산 */
function solutionReduce(numbers) {
    // reduce를 사용해 배열의 합을 구하고, 배열의 길이로 나누어 평균을 구함.
    var answer = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    
    return answer;
}

/* 방법 3: ES6 문법과 화살표 함수를 사용한 간결한 계산 */
const solutionArrow = (numbers) => numbers.reduce((acc, num) => acc + num, 0) / numbers.length;


/* 테스트 예시 */
console.log("방법 1 (for문 사용):", solutionForLoop([1, 2, 3, 4, 5]));  // 3
console.log("방법 2 (reduce 사용):", solutionReduce([1, 2, 3, 4, 5]));  // 3
console.log("방법 3 (화살표 함수 사용):", solutionArrow([1, 2, 3, 4, 5]));  // 3

// 다른 예시
console.log("방법 1 (for문 사용):", solutionForLoop([10, 20, 30]));  // 20
console.log("방법 2 (reduce 사용):", solutionReduce([10, 20, 30]));  // 20
console.log("방법 3 (화살표 함수 사용):", solutionArrow([10, 20, 30]));  // 20
