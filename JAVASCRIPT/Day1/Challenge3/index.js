function printUserInfo() {
  const myName = prompt("당신의 이름은?", "홍길동");
  const myHobby = prompt("당신의 취미는?", "독서");
  const favSong = prompt("좋아하는 곡은?", "어른");

  const myNameElem = document.getElementById("name");
  const myHobbyElem = document.getElementById("hobby");
  const favSongElem = document.getElementById("song");

  myNameElem.innerText = myName;
  myHobbyElem.innerText = myHobby;
  favSongElem.innerText = favSong;
}

printUserInfo();
