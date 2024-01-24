function createStar(option) {
  let shape = "";

  if (option == 1) {
    for (let i = 1; i <= 5; i++) {
      shape += "*".repeat(i);
      shape += "\n";
    }
  } else if (option == 2) {
    for (let i = 1; i <= 10; i++) {
      let line = "";

      if (i > 5) line += "*".repeat(11 - i);
      else line += "*".repeat(i);

      line += "\n";

      shape += line;
    }
  } else if (option == 3) {
    for (let i = 1; i <= 9; i++) {
      let line = "";
      // (왼쪽 기준) 공백 : 4 3 2 1 0 1 2 3 4
      // /* 개수 : 1 3 5 7 9 7 5 3 1
      if (i > 5) {
        line += "\b".repeat(i - 5);
        line += "*".repeat(9 - 2 * (i % 5));
      } else {
        line += "\b".repeat(5 - i);
        line += "*".repeat(2 * i - 1);
      }

      line += "\n";
      shape += line;
    }
  }

  return shape;
}

firstStarWrap = document.querySelector(".first-wrap");
firstStarElem = document.createElement("p");
firstStarElem.innerText = createStar(1);

firstStarWrap.append(firstStarElem);

secondStarWrap = document.querySelector(".second-wrap");
secondStarElem = document.createElement("p");
secondStarElem.innerText = createStar(2);

secondStarWrap.append(secondStarElem);

thridStarWrap = document.querySelector(".third-wrap");
thirdStarElem = document.createElement("p");
thirdStarElem.innerText = createStar(3);

thridStarWrap.append(thirdStarElem);
