document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const bookstoreId = urlParams.get("id");
  const storeForm = document.getElementById("reviewForm");

  storeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append(
      "image",
      storeForm.querySelector('[name="image"]').files[0],
    );
    formData.append("name", storeForm.querySelector('[name="name"]').value);
    formData.append(
      "address",
      storeForm.querySelector('[name="address"]').value,
    );
    formData.append(
      "description",
      storeForm.querySelector('[name="description"]').value,
    );
    formData.append("status", storeForm.querySelector('[name="status"]').value);

    fetch(`/api/stores/${bookstoreId}`, {
      method: "PUT",
      body: formData,
      mode: "cors",
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error("에러 ---", response);
          alert("서점 수정 중 오류가 발생했습니다.");
        }
      })
      .then((result) => {
        console.log(result);
        alert("서점이 성공적으로 수정되었습니다.");
        window.location.href = "main.html";
      })
      .catch(function (error) {
        console.error("에러 ---", error);
        alert("서점 수정 중 오류가 발생했습니다.");
      });
  });
});
