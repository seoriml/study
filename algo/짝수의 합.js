// 문제: n 이하의 짝수들의 합을 구하는 함수 작성

// 방법 1: 반복문을 사용하여 짝수들의 합 구하기
function solution1(n) {
    var answer = 0;

    // 2부터 n까지 2씩 증가하면서 짝수만 더하기
    for (var i = 2; i <= n; i += 2) {
        answer += i;
    }

    return answer;
}

// 예시 실행
console.log(solution1(10));  // 30 (2 + 4 + 6 + 8 + 10)
console.log(solution1(6));   // 12 (2 + 4 + 6)


// 방법 2: 수학적 공식을 사용하여 짝수들의 합 구하기
function solution2(n) {
    var m = Math.floor(n / 2);  // n 이하에서 짝수의 개수
    return m * (m + 1);  // 짝수들의 합
}

// 예시 실행
console.log(solution2(10));  // 30 (2 + 4 + 6 + 8 + 10)
console.log(solution2(6));   // 12 (2 + 4 + 6)
