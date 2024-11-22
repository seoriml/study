function solution(num_list) {
    var answer = [0, 0];  // [짝수의 개수, 홀수의 개수]
    
    // num_list를 순회하면서 짝수와 홀수의 개수를 셈
    for (var i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            answer[0]++;  // 짝수일 경우 짝수 카운트 증가
        } else {
            answer[1]++;  // 홀수일 경우 홀수 카운트 증가
        }
    }
    
    return answer;  // 짝수와 홀수의 개수를 담은 배열 반환
}
