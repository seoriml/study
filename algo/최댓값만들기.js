// 문제: 정수 배열에서 두 개의 원소를 곱해 만들 수 있는 최댓값을 구하는 함수

function solution(numbers) {
    // 배열을 오름차순으로 정렬
    numbers.sort((a, b) => a - b);
    
    // 가장 큰 두 수의 곱 또는 가장 작은 두 수의 곱을 비교하여 반환
    var answer = Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
    
    return answer;
}

// 예시 실행
console.log(solution([1, 2, 3, 4]));  // 출력: 12 (3 * 4)
console.log(solution([-10, -10, 5, 2]));  // 출력: 100 (-10 * -10)
console.log(solution([0, 1, 2, 3]));  // 출력: 6 (2 * 3)
