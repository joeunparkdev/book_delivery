async function checkEmail() {
  const email = document.getElementById("inputEmail").value;

  if (!email) {
    alert("이메일을 입력해주세요.");
    return;
  }

  try {
    const response = await fetch(`/api/auth/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
      mode: "cors",
    });

    const result = await response.json();

    if (result.success) {
      alert("사용 가능한 이메일입니다.");
    } else {
      alert("이미 사용 중인 이메일입니다.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Kakao 로그인 버튼 클릭 이벤트 핸들러
document
  .getElementById("kakao-login-btn")
  .addEventListener("click", function () {
    handleKakaoLogin();
  });

// Kakao 로그인 함수
async function handleKakaoLogin() {
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

// Kakao 액세스 토큰을 서버로 전송하는 함수
async function sendKakaoAccessTokenToServer(kakaoAccessToken) {
  try {
    const response = await fetch(`/api/auth/kakao/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ kakaoAccessToken }),
      mode: "cors",
    });

    const result = await response.json();

    if (result.success) {
      alert("Kakao 로그인 성공!");
      window.location.href = "main.html";
    } else {
      alert(`Kakao 로그인 실패: ${result.message}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

function sign_up() {
  const username = document.getElementById("inputNickname").value;
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword1").value;
  const confirmPassword = document.getElementById("inputPassword2").value;
  const verificationCode = document.getElementById("inputCode").value;

  const data = {
    username,
    email,
    password,
    confirmPassword,
    verificationCode,
  };

  fetch(`/api/auth/signup/OWNER`, {
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

  fetch(`/api/auth/signin`, {
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

// 음식 목록 배열
const foods = [
  "모찌",
  "삼각김밥",
  "신라면",
  "샌드위치",
  "스윙칩",
  "햄버거",
  "소세지",
  "샐러드",
  "타코",
  "피자",
];
// 랜덤 음식 추천 함수
function getRandomFood() {
  // 배열에서 랜덤으로 음식 선택
  const randomIndex = Math.floor(Math.random() * foods.length);
  const query = foods[randomIndex];
  // 화면에 표시
  document.getElementById("foodDisplay").innerText =
    "오늘 메뉴는 " + query + "어때요?";
  const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CX}&key=${API_KEY}&searchType=image`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.items && data.items.length > 0) {
        const firstImageUrl = data.items[0].link;
        const imageElement = document.createElement("img");
        imageElement.src = firstImageUrl;
        const previousImageElement =
          document.getElementById("imageContainer").firstChild;
        document
          .getElementById("imageContainer")
          .replaceChild(imageElement, previousImageElement);
      } else {
        console.log("No images found.");
      }
    })
    .catch((error) => console.error("Error:", error));
}
