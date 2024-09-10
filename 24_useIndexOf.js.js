// 24.서울에서 김서방 찾기
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  // "Kim"의 위치를 찾는다.
  var index = seoul.indexOf("Kim");

  // 찾은 위치를 템플릿 리터럴로 반환한다.
  return `김서방은 ${index}에 있다`;
}
