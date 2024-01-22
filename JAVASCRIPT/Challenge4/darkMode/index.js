eventName = { click: "click" };
colorName = { white: "white", black: "black" };

function loadBtnEvent() {
  whiteBtn = document.getElementById(colorName.white);
  blackBtn = document.getElementById(colorName.black);

  function changeBgColor(event, colorName) {
    console.log("clicked");
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
