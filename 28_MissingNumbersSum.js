// 28. 없는 숫자 더하기
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    // 0부터 9까지의 모든 숫자의 합은 45 (0+1+2+...+9)
    const totalSum = 45;
    
    // numbers 배열에 있는 숫자들의 합을 구함
    const numbersSum = numbers.reduce((acc, curr) => acc + curr, 0);
    
    // 전체 합에서 numbers 배열에 있는 숫자들의 합을 뺀 값이 없는 숫자들의 합
    var answer = totalSum - numbersSum;
    
    return answer;
}