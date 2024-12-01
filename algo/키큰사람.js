function solution(array, height) {
    var answer = 0;
    
    // 배열을 순회하면서 키가 height보다 큰 사람 수를 셈
    for (var i = 0; i < array.length; i++) {
        if (array[i] > height) {
            answer++;
        }
    }
    
    return answer;
}
