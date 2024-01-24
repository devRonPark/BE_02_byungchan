const eventName = { click: "click" };
const colorName = { white: "white", black: "black" };

function loadBtnEvent() {
  const whiteBtn = document.getElementById(colorName.white);
  const blackBtn = document.getElementById(colorName.black);

  function changeBgColor(event, colorName) {
    document.body.style.backgroundColor = colorName;
  }

  whiteBtn.addEventListener(eventName.click, (event) =>
    changeBgColor(event, colorName.white)
  );
  blackBtn.addEventListener(eventName.click, (event) =>
    changeBgColor(event, colorName.black)
  );
}

loadBtnEvent();
