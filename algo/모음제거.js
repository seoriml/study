function solution(my_string) {
    var answer = '';
    // 문자열을 순회하면서 모음이 아닌 문자만 answer에 추가
    for (var i = 0; i < my_string.length; i++) {
        // 현재 문자가 모음(a, e, i, o, u)인지 확인
        if (!'aeiouAEIOU'.includes(my_string[i])) {
            answer += my_string[i];  // 모음이 아니면 결과 문자열에 추가
        }
    }
    return answer;  // 최종 결과 반환
}

// 예시 실행
console.log(solution("hello world"));  // 출력: "hll wrld"
// console.log(solution("This is an example sentence."));  // 출력: "Ths s n xmpl sntnc."
console.log(solution("aeiou"));  // 출력: ""
console.log(solution("HELLO"));  // 출력: "HLL"
console.log(solution("aeIoU"));  // 출력: "I"