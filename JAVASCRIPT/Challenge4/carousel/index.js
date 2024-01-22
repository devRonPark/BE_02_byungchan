const btnName = { prev: "prevBtn", next: "nextBtn" };
const evtName = { click: "click" };

const prevBtn = document.getElementById(btnName.prev);
const nextBtn = document.getElementById(btnName.next);
const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel > li");
let index = 0;

function handleBtnClick(event, btn) {
  function clickPrevBtn(index) {
    /* 현재 보이는 이미지가 첫번째 이미지인 경우, 마지막 이미지로 이동 */
    if (index == 0) index = carouselItems.length - 1;
    else index -= 1;

    return index;
  }
  function clickNextBtn(index) {
    /* 현재 보이는 이미지가 마지막 이미지인 경우, 첫번째 이미지로 이동 */
    if (index == carouselItems.length - 1) index = 0;
    else index += 1;

    return index;
  }

  switch (btn) {
    case btnName.prev:
      index = clickPrevBtn(index);
      break;
    case btnName.next:
      index = clickNextBtn(index);
      break;
  }

  carousel.style.transform = `translate3d(${-500 * index}px, 0, 0)`;
}

prevBtn.addEventListener(evtName.click, (event) =>
  handleBtnClick(event, btnName.prev)
);
nextBtn.addEventListener(evtName.click, (event) =>
  handleBtnClick(event, btnName.next)
);
