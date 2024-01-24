function getScorePoint(score) {
  let result;

  if (score >= 90) result = "A";
  else if (score >= 80) result = "B";
  else if (score >= 70) result = "C";
  else if (score >= 60) result = "D";
  else result = "F";

  return result;
}

midTermScore = +prompt("중간고사 점수를 입력하세요", "0");
midTermScorePoint = getScorePoint(midTermScore);

const midTermElem = document.createElement("p");
midTermElem.innerText = `나의 중간고사 점수는 ${midTermScore} 점, 학점은 ${midTermScorePoint}!!!`;
document.body.appendChild(midTermElem);
