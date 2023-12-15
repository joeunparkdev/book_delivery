function sign_up() {
  const username = document.getElementById("inputNickname").value;
  console.log("Username:", username);
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword1").value;
  const confirmPassword = document.getElementById("inputPassword2").value;
  const verificationCode = document.getElementById(
    "inputVerificationCode",
  ).value;
  console.log("verificationCode:", verificationCode);
  const userTypeFormGroup = document.getElementById("userTypeFormGroup");
  const usertype = userTypeFormGroup.querySelector(":checked").value;

  const data = {
    username,
    email,
    password,
    confirmPassword,
    verificationCode,
  };

  fetch(`/api/auth/signup/${usertype}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        alert("회원가입 성공!");
        window.location.href = "login.html";
      } else {
        alert(`회원가입 실패: ${result.message}`);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
