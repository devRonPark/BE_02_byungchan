// Mystery Number
let correctNumber = Math.floor(Math.random() * 101);

const userIpt = document.getElementById("number");
const checkBtn = document.getElementById("check");
const resultBox = document.getElementById("result");
const againBtn = document.createElement("button");
againBtn.innerText = "다시하기";

function checkCorrectNumber(event) {
  const userIptVal = userIpt.value;
  let hint = "";
  resultBox.innerText = "";

  if (userIptVal > correctNumber) {
    // 힌트 출력: 숫자가 커요! 줄여볼까요?
    hint += "숫자가 커요! 줄여볼까요?";
    resultBox.innerText = hint;
  } else if (userIptVal < correctNumber) {
    // 힌트 출력: 숫자가 너무 작아요! 조금 더 높여보세요!
    hint += "숫자가 너무 작아요! 조금 더 높여보세요!";
    resultBox.innerText = hint;
  } else {
    // 다시하기 버튼 보여주기
    resultBox.appendChild(againBtn);
  }

  userIpt.focus();
}

function handleAgainBtn(event) {
  // 사용자 인풋 초기화
  userIpt.value = "";
  // Mystery Number 값 초기화
  correctNumber = Math.floor(Math.random() * 101);
  console.log(correctNumber);
  // 다시하기 버튼 삭제
  resultBox.innerHTML = "";
  // 사용자 입력 인풋 포커싱
  userIpt.focus();
}

checkBtn.addEventListener("click", checkCorrectNumber);
againBtn.addEventListener("click", handleAgainBtn);
