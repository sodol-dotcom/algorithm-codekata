// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
    // 빈 배열 생성!!
    var answer = [];

    // i가 0부터 n-1번까지 증가하도록 (n-1인 이유는 예를들어 5개 지니는 리스트는 주소값이 0~4까지여야하기 때문)
    // x씩 증가면 x * i, x * (i++)가 되도록 함
    // push를 이용해 배열에 요소 추가
    for(let i = 0; i < n; i++) {
        answer.push(x * (i + 1));
    }
    return answer;
}