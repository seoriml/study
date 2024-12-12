function solution(my_string, letter) {
    // replace() 메서드를 사용하여 letter 문자를 빈 문자열로 교체
    var answer = my_string.replace(new RegExp(letter, 'g'), '');
    return answer;
}
