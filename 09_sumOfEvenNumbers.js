function solution(n) {
    let answer = 0; // answer를 지역 변수로 선언
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) { // i가 짝수인지 검사
            answer += i; // answer에 짝수를 더함
        }
    }
    return answer; // 최종 결과를 반환
}

console.log(solution(10)); // 결과를 출력