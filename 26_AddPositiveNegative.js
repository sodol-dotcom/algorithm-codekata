// 26. 음양 더하기
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

function solution(absolutes, signs) {
    var answer = 0;

    // absolutes 배열과 signs 배열을 순회하면서 실제 정수를 계산합니다.
    for (var i = 0; i < absolutes.length; i++) {
        if (signs[i]) {
            answer += absolutes[i]; // signs[i]가 true이면 양수
        } else {
            answer -= absolutes[i]; // signs[i]가 false이면 음수
        }
    }

    return answer;
}