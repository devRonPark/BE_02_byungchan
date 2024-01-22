function printUserInfo() {
  myName = prompt("당신의 이름은?", "홍길동");
  myHobby = prompt("당신의 취미는?", "독서");
  favSong = prompt("좋아하는 곡은?", "어른");

  myNameElem = document.getElementById("name");
  myHobbyElem = document.getElementById("hobby");
  favSongElem = document.getElementById("song");

  myNameElem.innerText = myName;
  myHobbyElem.innerText = myHobby;
  favSongElem.innerText = favSong;
}

printUserInfo();
