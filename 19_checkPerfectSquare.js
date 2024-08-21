// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
    // n의 제곱근을 구해서 x에 할당
    // Math.sqrt() 사용
    const x = Math.sqrt(n);

    // x가 정수인지 확인
    // Number.isInteger() 사용
    if(Number.isInteger(x)) {
        return (x + 1) * (x + 1);   // x가 정수라면 x+1의 제곱을 반환
    } else {
        return - 1;     // x가 정수가 아니라면 -1을 반환
    }
}