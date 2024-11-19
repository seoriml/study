// 양꼬치 1인분 가격은 12,000원, 음료수는 2,000원
// 양꼬치 10인분마다 음료수 1개 무료 제공

function solution(n, k) {
    var answer = 0;

    // 양꼬치 가격 계산
    var lambSkewersPrice = n * 12000;

    // 무료 음료수 개수 계산
    var freeDrinks = Math.floor(n / 10);

    // 실제 결제할 음료수 개수 (무료 음료수 제외)
    var drinkCountToPay = Math.max(k - freeDrinks, 0);

    // 음료수 가격 계산
    var drinksPrice = drinkCountToPay * 2000;

    // 총 결제 금액 계산
    answer = lambSkewersPrice + drinksPrice;

    return answer;
}

// 테스트 예시
console.log(solution(15, 3));  // 184000
console.log(solution(10, 5));  // 130000
console.log(solution(5, 2));   // 70000
