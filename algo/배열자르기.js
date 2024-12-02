// 문제: 주어진 정수 배열에서 num1번 째 인덱스부터 num2번 째 인덱스까지 자른 배열을 반환하는 함수

function solution(numbers, num1, num2) {
    // slice() 메서드를 이용해 num1부터 num2까지의 부분 배열을 반환
    return numbers.slice(num1, num2 + 1);
}

// 예시 실행
console.log(solution([1, 2, 3, 4, 5], 1, 3));  // 출력: [2, 3, 4]
console.log(solution([10, 20, 30, 40, 50], 0, 2));  // 출력: [10, 20, 30]
