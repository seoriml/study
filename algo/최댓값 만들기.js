function solution(numbers) {
    // 배열을 내림차순으로 정렬
    numbers.sort((a, b) => b - a);
    
    // 가장 큰 두 수를 곱함
    return numbers[0] * numbers[1];
}
