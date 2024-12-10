function solution(n) {
    var answer = 0;
    // n을 문자열로 변환하여 각 문자(자리 숫자)로 순회
    n.toString().split('').forEach(function(digit) {
        answer += parseInt(digit);  // 각 자릿수를 숫자로 변환하여 더함
    });
    return answer;
}
