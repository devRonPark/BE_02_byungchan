nameIpt = document.getElementById("name");
emailIpt = document.getElementById("email");
pwdIpt = document.getElementById("pwd");
pwdCheckIpt = document.getElementById("pwd-check");
genderChecked = document.querySelector('input[name="gender"]:checked');
signUpBtn = document.getElementById("signUp");

function handleSignUp(event) {
  event.preventDefault();

  // 회원가입 시 필요한 데이터
  const signUpData = {
    name: nameIpt.value,
    email: emailIpt.value,
    password: pwdIpt.value,
    passwordCheck: pwdCheckIpt.value,
    gender: genderChecked.value,
  };

  console.log(signUpData);
}

signUpBtn.addEventListener("submit", (event) => handleSignUp(event));
