async function deleteProfile() {
  console.log("Before confirm");
  const confirmed = confirm("정말로 이 서점을 삭제하시겠습니까?");
  console.log("After confirm");
  if (confirmed) {
    try {
      const response = await fetch(`/api/users/me`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        alert("서점이 성공적으로 삭제되었습니다.");
      } else if (response.status === 403) {
        // 권한이 없는 경우 알림 표시
        alert("삭제할 권한이 없습니다.");
      } else {
        console.error(
          "Error deleting profile:",
          response.status,
          response.statusText,
        );
        const errorData = await response.json();
        console.error("Additional error details:", errorData);
      }
    } catch (error) {
      console.error("Error deleting profile:", error.message);
    }
  }
}

// 프로필 가져오기
async function getUserDetails() {
  try {
    const response = await fetch(`/api/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      const result = await response.json();
      const userData = result.data;

      // Update HTML with user details
      document.getElementById("userName").innerText =
        `이름: ${userData.username}`;
      document.getElementById("userEmail").innerText =
        `Email: ${userData.email}`;
    } else if (response.status === 403) {
      alert("조회할 권한이 없습니다.");
    } else {
      console.error(
        "Error fetching user profile:",
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
  }
}

document.addEventListener("DOMContentLoaded", getUserDetails);
