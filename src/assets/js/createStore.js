document.addEventListener("DOMContentLoaded", function () {
  const storeForm = document.getElementById("reviewForm");

  storeForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      const formData = new FormData();
      const imageInput = storeForm.querySelector('[name="image"]');
      formData.append("image", imageInput.files[0]);
      formData.append("name", storeForm.querySelector('[name="name"]').value);
      formData.append(
        "address",
        storeForm.querySelector('[name="address"]').value,
      );
      formData.append(
        "description",
        storeForm.querySelector('[name="description"]').value,
      );
      formData.append(
        "status",
        storeForm.querySelector('[name="status"]').value,
      );

      const response = await fetch("/api/stores/", {
        method: "POST",
        body: formData,
        mode: "cors",
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert("서점이 성공적으로 등록되었습니다.");
        window.location.href = "main.html";
      } else {
        console.error("에러 ---", response);
        alert("서점 등록 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("에러 ---", error);
      alert("서점 등록 중 오류가 발생했습니다.");
    }
  });
});
