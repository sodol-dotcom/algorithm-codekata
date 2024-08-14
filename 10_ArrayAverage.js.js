//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let sum = 0;

    // 배열의 요소를 순회하면서 합을 구함
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // 배열의 요소의 합을 구하고 배열의 길이(요소의 개수)로 나눔
    average = sum / numbers.length;
    return average;
}