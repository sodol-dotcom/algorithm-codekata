// 32. 내적
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

function solution(a, b) {
    let answer = 0;  // 결과값을 저장할 변수 초기화
    for (let i = 0; i < a.length; i++) {  // 배열의 길이만큼 반복
        answer += a[i] * b[i];  // 각 요소끼리 곱한 값을 answer에 더함
    }
    return answer;  // 최종 결과 반환
}