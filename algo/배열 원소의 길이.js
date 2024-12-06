function solution(strlist) {
    var answer = strlist.map(function(str) {
        return str.length;
    });
    console.log(answer);
    return answer;
}

// 함수 테스트
solution(["사과", "바나나", "체리"]); 
