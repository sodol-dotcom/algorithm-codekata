// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

function solution(n) {

    // for함수를 이용해서 x가 1부터 n-1까지 증가하도록 함
    for (let x = 1; x < n; x++) {
        // n 나누기 x를 했을때 나머지가 1이 나오면 즉시 반환하도록 함
        if (n % x === 1) {
            return x;
        }
    }
} 