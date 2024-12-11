function solution(n) {
    var answer = 0;
    n.toString().split('').forEach(function(digit) {
        answer += parseInt(digit);  // 각 자릿수를 숫자로 변환하여 더함
    });
    return answer;
}

console.log(solution(123));  // 6
