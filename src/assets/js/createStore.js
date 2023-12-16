document.addEventListener("DOMContentLoaded", function () {
  const storeForm = document.getElementById("reviewForm");
  const imageInput = document.getElementById("image");
  const previewImage = document.getElementById("previewImage");

  imageInput.addEventListener("change", handleImageUpload);

  function handleImageUpload() {
    const file = imageInput.files[0];

    if (file) {
      // 이미지 미리보기
      previewImage.src = URL.createObjectURL(file);

      // 이미지 리사이징
      resizeImage(file, 300, 300, function (resizedFile) {
        // 리사이징된 이미지를 FormData에 추가
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
      console.log("Image:", formData.get("image"));
      console.log("Name:", formData.get("name"));
      console.log("Address:", formData.get("address"));
      console.log("Description:", formData.get("description"));
      console.log("Status:", formData.get("status"));

      const response = await fetch("/api/stores/", {
        method: "POST",
        body: formData,
        mode: "cors",
        credentials: "include",
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Image URL:", result.data.imageUrl);
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
