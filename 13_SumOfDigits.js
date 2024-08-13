// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {   
    // 숫자를 문자열로 변환
    let str = n.toString();
    
    // 합 저장할 변수 초기화
    let answer = 0;

    // 문자열의 각 자릿수 순회하며 숫자로 변환하고 더하기
    for (let i = 0; i < str.length; i++ ) {
        answer = answer + parseInt(str[i]);
    }
    
    // 최종 합계
    return answer;
}