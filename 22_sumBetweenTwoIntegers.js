// 22. 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
    var answer = 0;

    // a가 더 크면 a와 b를 교체하여 a가 항상 더 작은 값이 되도록 처리
    if(a > b) {
        var temp = a;
        a = b;
        b = temp;
    }

    // a부터 b까지의 모든 값을 더하기
    for (var i = a; i <= b; i++) {
        answer += i;
    }

    return answer;
};

console.log(solution(3,5));