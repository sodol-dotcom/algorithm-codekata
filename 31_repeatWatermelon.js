// 31. 수박수박수박수박수박수?
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  let answer = ""; // 빈 문자열을 만들어, 결과값을 저장할 공간을 확보

  // n번 반복하면서 i가 짝수일 때 "수", 홀수일 때 "박"을 추가
  for (let i = 0; i < n; i++) {
    answer += i % 2 === 0 ? "수" : "박"; // i가 짝수이면 '수', 홀수이면 '박'을 추가
  }

  return answer; // 결과로 완성된 문자열을 반환
}