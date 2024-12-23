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

// 예시 배열과 height 값 설정
var array = [150, 160, 170, 180, 190];
var height = 165;

console.log(solution(array, height));
