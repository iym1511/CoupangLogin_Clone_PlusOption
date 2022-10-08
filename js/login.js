// body를 인식하려면 화면은 읽으다음에 얘를 인식
// window.onload : 페이지 로드 후 스크립트 실행!
window.onload = function () {
  const pw_show_hide = document.querySelector(".pw_show_hide");
  const input_id = document.querySelector("input[type=text]");
  const input_id_text = document.querySelector("#id");
  const input_pw = document.querySelector("input[type=password");
  const input_pw_text = document.querySelector("#pw");
  const id_error = document.querySelector(".id_error");
  const pw_error = document.querySelector(".pw_error");

  // 이벤트 input은 value값 속성이 바뀔때마다 발생 유용함 ★
  // ※옵션추가 - 아이디 비번 value값이 없으면 경고창 발생
  input_id_text.addEventListener("click", id);
  input_id_text.addEventListener("input", id);
  function id() {
    if (input_id_text.value == "") {
      id_error.style.display = "block";
    } else {
      id_error.style.display = "none";
    }
  }
  input_pw_text.addEventListener("click", pw);
  input_pw_text.addEventListener("input", pw);
  function pw() {
    if (input_pw_text.value == "") {
      pw_error.style.display = "block";
    } else {
      pw_error.style.display = "none";
    }
  }

  // 비밀번호 표시 on/off
  // 참이면 눈떠있고 거짓이면 눈감김
  let i = true;
  pw_show_hide.addEventListener("click", function () {
    if (i == true) {
      pw_show_hide.style.backgroundPosition = "-126px 0";
      i = false;
      // ※옵션추가 클릭하면 비번보이게 ●
      document.querySelector("#pw").setAttribute("type", "text");
    } else {
      pw_show_hide.style.backgroundPosition = "-105px 0";
      i = true;
      // ※옵션추가 다시클릭하면 비번안보이게 ●
      document.querySelector("#pw").setAttribute("type", "password");
    }
  });
}; // onload end
