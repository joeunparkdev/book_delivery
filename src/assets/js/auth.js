// Kakao 로그인 버튼 클릭 이벤트 핸들러
document
  .getElementById("kakao-login-btn")
  .addEventListener("click", function () {
    sendKakaoAccessTokenToServer();
  });

// Kakao 로그인 함수
async function handleKakao_login() {
  try {
    await new Promise((resolve) => {
      if (window.Kakao) {
        resolve();
      } else {
        window.onload = resolve;
      }
    });

    // Kakao SDK를 초기화
    Kakao.init("3980c403de0926c15940e444945aef79");

    // Kakao.Auth.login을 호출하여 로그인
    Kakao.Auth.login({
      success: async (authObj) => {
        // 사용자가 Kakao로 성공적으로 로그인
        console.log(authObj);
        const kakaoAccessToken = Kakao.Auth.getAccessToken();
        await sendKakaoAccessTokenToServer(kakaoAccessToken);
      },
      fail: (err) => {
        // 로그인 실패 처리
        console.log(err);
      },
    });
  } catch (error) {
    console.error(error);
  }
}

// 진짜 카카오 로그인
async function kakao_login() {
  const response = await fetch(`http://localhost:3001/api/auth/kakao`, {
    method: "GET",
    mode: "no-cors",
  });
}

function sign_up() {
  const username = document.getElementById("inputNickname").value;
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword1").value;
  const confirmPassword = document.getElementById("inputPassword2").value;
  const verificationCode = document.getElementById("inputCode").value;

  const userTypeFormGroup = document.getElementById("userTypeFormGroup");
  const usertype = userTypeFormGroup.querySelector(":checked").value;

  const data = {
    username,
    email,
    password,
    confirmPassword,
    verificationCode,
  };

  fetch(`http://localhost:3001/api/auth/signup/${usertype}`, {
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

function sign_in() {
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;

  fetch(`http://localhost:3001/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    mode: "cors",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        alert("로그인 성공!");
        window.location.href = "main.html";
      } else {
        alert(`로그인 실패: ${result.message}`);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function send_code() {
  const email = document.getElementById("inputEmail").value;

  if (!email) {
    alert("이메일을 입력해주세요.");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3001/api/auth/sendCode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
      mode: "cors",
      credentials: "include",
    });

    const result = await response.json();

    if (result.success) {
      alert("인증 코드를 이메일로 전송했습니다.");
    } else {
      alert("인증 코드 전송에 실패했습니다.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function verify_code() {
  const verificationCode = document.getElementById("inputVerificationCode").value;

  if (!verificationCode) {
    alert("인증 코드를 입력해주세요.");
    return;
  }

  const email = document.getElementById("inputEmail").value;

  const data = {
    email,
    verificationCode,
  };

  try {
    fetch(`http://localhost:3001/api/auth/verifyCode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          alert("인증 코드 확인 성공!");
        } else {
          alert("인증 코드 확인에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.error("Error:", error);
  }
}
