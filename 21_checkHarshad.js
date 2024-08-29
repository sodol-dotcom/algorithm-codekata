// 하샤드 수
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 과정 1) 숫자를 스트링으로 변환 후 각각 숫자로 배열에 담음
// 과정 2) 배열의 값들을 모두 더한 후 정수 x를 배열의 합으로 나누고
// 과정 3) 나눴을 때 0이면 하샤드 수임을 출력

function solution(x) {

    // 과정 1) 숫자를 스트링으로 변환 후 각 자릿수를 분리해서 배열에 저장
    var arr = x.toString().split('')

    // 과정 2) 문자 열을 각각 숫자로 변환해 배열에 저장(reduce 메서드로 누적 합 계산하기)
    var sum = arr.reduce((acc, curr) => acc +Number(curr), 0)

    // 과정 3) 정수 x를 배열의 합으로 나눴을 때 0이면 하샤드 수임을 출력
    if (x % sum === 0) {
        return true;    // 하샤드 수 일때 true
    } else {
        return false;   // 하샤드 수가 아닐 때
    }

}

console.log(solution(15));
console.log(solution(18));