// 36. 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    // 문자열의 길이가 4 또는 6인지 확인
    if (s.length === 4 || s.length === 6) {
        // 숫자로만 이루어졌는지 확인
        return /^\d+$/.test(s); // 정규식을 사용하여 숫자만 있는지 확인
    }
    return false; // 길이가 4나 6이 아닌 경우 false 리턴
}
