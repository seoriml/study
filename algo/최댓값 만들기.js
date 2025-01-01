function solution(numbers) {
    // 배열을 내림차순으로 정렬
    numbers.sort((a, b) => b - a);
    
    // 가장 큰 두 수를 곱함
    const result = numbers[0] * numbers[1];

    console.log(result);
    
    return result;
}
