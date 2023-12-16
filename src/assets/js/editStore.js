document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const bookstoreId = urlParams.get("id");
  console.log(bookstoreId);
  const storeForm = document.getElementById("reviewForm");
  const imageInput = document.getElementById("image");
  const previewImage = document.getElementById("previewImage");

  imageInput.addEventListener("change", handleImageUpload);

  function handleImageUpload() {
    const file = imageInput.files[0];

    if (file) {
      previewImage.src = URL.createObjectURL(file);

      resizeImage(file, 300, 300, function (resizedFile) {
        storeForm.delete("image");
        storeForm.append("image", resizedFile);
      });
    }
  }

  function resizeImage(file, maxWidth, maxHeight, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (event) {
      const img = new Image();
      img.src = event.target.result;

      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const aspectRatio = width / height;

          if (aspectRatio > 1) {
            width = maxWidth;
            height = width / aspectRatio;
          } else {
            height = maxHeight;
            width = height * aspectRatio;
          }
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(function (blob) {
          const resizedFile = new File([blob], file.name, { type: file.type });
          callback(resizedFile);
        }, file.type);
      };
    };
  }

  storeForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
      const formData = new FormData(storeForm);
      formData.append("bookstoreId", bookstoreId);
      console.log(bookstoreId);
      const response = await fetch(`/api/stores/${bookstoreId}`, {
        method: "PUT",
        body: formData,
        mode: "cors",
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        alert("서점이 성공적으로 수정되었습니다.");
        window.location.href = "main.html";
      } else {
        console.error("에러 ---", response);
        alert("서점 정보 수정 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("에러 ---", error);
      alert("서점 정보 수정 중 오류가 발생했습니다.");
    }
  });
});
