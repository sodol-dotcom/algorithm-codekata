// 34. 문자열 내림차순으로 배치하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.\

function solution(s) {
    // 문자열을 배열로 변환한 후, 내림차순으로 정렬
    // 대문자는 소문자보다 작게 취급되므로 기본 정렬이 유효
    var answer = s.split('').sort((a, b) => b.localeCompare(a)).join('');
    return answer;
}
