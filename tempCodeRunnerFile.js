function solution(n) {
    answer = 0;
    for (var i = 0; i <= n; i++) {
        if(i / 2 === 0) {
            answer = answer + i;
        }
    }
    return answer;
}