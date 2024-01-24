// number: 배수의 대상, totalCount: 출력할 배수의 전체 개수, itemCountOfLine: 한 줄 당 출력할 배수의 개수
function createMultipleStr(number, totalCount, itemCountOfLine) {
  let i = 1;
  let multiplesStr = "";

  while (i <= totalCount) {
    let line = "";
    line += number * i + "\b";
    if (i % itemCountOfLine == 0) line += "\n";

    multiplesStr += line;
    i++;
  }

  return multiplesStr;
}

const multiplesWrap = document.createElement("p");

multiplesWrap.innerText = createMultipleStr(4, 100, 5);
document.body.appendChild(multiplesWrap);
