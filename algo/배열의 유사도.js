function solution(s1, s2) {
    var answer = 0;
    
    // s1의 각 원소가 s2에 포함되는지 확인
    for (var i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            answer++;
        }
    }
    
    return answer;
}

// 예시 입력 값
var s1 = "abc";
var s2 = "abcdef";

// 함수 실행 후 결과 출력
console.log(solution(s1, s2));  // 3
