// 30. 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s) {
  // 1. 문자열의 길이 구하기
  var len = s.length;

  // 2. 문자열의 길이를 2로 나누고 소수점 버리기
  var mid = Math.floor(len / 2);

  // 3. 문자열의 길이가 홀수인지 확인하기(가운데 한 글자 반환)
  if (len % 2 === 1) {
    return s[mid];
    // 4. 문자열의 길이가 짝수인지 확인하기(가운데 두 글자 반환)
  } else {
    return s[mid - 1] + s[mid];
  }
}

console.log(solution("javascript")); // 문자열 따옴표로 감싸기
console.log(solution("programming"));