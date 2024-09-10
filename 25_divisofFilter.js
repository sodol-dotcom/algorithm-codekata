// 24. 나누어 떨어지는 숫자
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, 
// solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
    
    // arr에서 divisor로 나누어 떨어진는 요소만 필터링
    var answer = arr.filter(num => num % divisor === 0);

    // 나누어 떨어지는 값이 하나도 없다면 -1 반환
    if (answer.length === 0) {
        return [-1];
    }

    // 오름차순으로 정렬한 배열 반환
    return answer.sort((a, b) => a - b);
}