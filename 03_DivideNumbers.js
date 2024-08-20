function solution(num1, num2) {
    var answer = 0;

    if (!(0 < num1 <= 100 && 0 < num2 <= 100)) {
        console.log("'num1'과 'num2'가 0보다 크고 100보다 작거나 같은 값을 넣어주세요.")
    }
    else {
        answer = Math.floor(num1 / num2);
        return answer;
    } 
}; 