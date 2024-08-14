// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n) {

    let answer = 0;
    // for문을 사용해서 i가 1부터 n이 될때 까지 순회하도록 함
    for (let i = 1; i <= n; i++) {

        // n을 i로 나눴을때 0이 되는 값들을 answer에 더함
        if (n % i === 0) {
            answer += i
        }
    }
    return answer;
}