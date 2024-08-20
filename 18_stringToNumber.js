// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
// 자바스크립트에서 문자열을 숫자로 변환하는 방법은 세가지 -> 'parseInt', 'Number', '단항 '+' 연산자 사용'
// 가장 일반적이고 안전한 방법은 'Number' 함수이다. 왜냐하면 이 함수는 입력이 소수일 때도 정확하게 처리하기 때문

function solution(s) {
    var answer = Number(s);
    return answer;
}