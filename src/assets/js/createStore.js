document.addEventListener("DOMContentLoaded", function () {
  const storeForm = document.getElementById("reviewForm");

  storeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(storeForm);
    const storeData = {
      image: formData.get("image"),
      name: formData.get("name"),
      address: formData.get("address"),
      description: formData.get("description"),
      status: formData.get("status"),
    };
    fetch(`/api/stores/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: storeData,
      mode: "cors",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("에러 ---", response);
          alert("서점 등록 중 오류가 발생했습니다.");
        }
      })
      .then((result) => {
        console.log(result);
        alert("서점이 성공적으로 등록되었습니다.");
        window.location.href = "main.html";
      })
      .catch(function (error) {
        console.error("에러 ---", error);
        alert("서점 등록 중 오류가 발생했습니다.");
      });
  });
});
