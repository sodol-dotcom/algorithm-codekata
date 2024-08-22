// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
    
    // 정수를 문자열로 변환하고, 각 자릿수를 배열로 변환
    var arr = String(n).split('')

    // 각 자릿수를 내림차순으로 정렬
    arr.sort((a, b) => b - a);

    // 정렬을 배열을 다시 문자열로 합치고 정수로 변환
    var answer = parseInt(arr.join(''));
    
    return answer;
}