// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector(".modal");
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement("div");
  modal.className = "modal hidden";

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content zoomIn";

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement("div");
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = "Door Image";
  image.style.width = "100%";
  image.style.height = "211px";

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement("p");
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener("click", () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove("hidden"), 0);
}

const modalMessageList = [
  { number: 1, message: "내가 한 말을 내가 오해하지 않기로 함" },
  { number: 2, message: "마흔에 읽는 쇼펜하우어" },
  { number: 3, message: "세이노의 가르침" },
  { number: 4, message: "흔한남매 15 " },
  { number: 5, message: "트렌드 코리아 2024 " },
  { number: 6, message: "퓨처 셀프" },
  { number: 7, message: "황금종이 1" },
  { number: 8, message: "남에게 보여주려고 인생을 낭비하지 마라 " },
  { number: 9, message: "도둑맞은 집중력 " },
  { number: 10, message: "황금종이 2 " },
  { number: 11, message: "흔한남매 과학 탐험대 9 대기와 날씨 " },
  {
    number: 12,
    message: "요즘 어른을 위한 최소한의 세계사 ",
  },
  { number: 13, message: "기자유감" },
  { number: 14, message: "[한정판] 무적 LG! " },
  { number: 15, message: "[예스리커버] 최소한의 한국사" },
  {
    number: 16,
    message:
      "생각이 너무 많은 어른들을 위한 심리학 (10만부 돌파 기념 스페셜 에디션)",
  },
  {
    number: 17,
    message: "당신의 인생이 왜 힘들지 않아야 한다고 생각하십니까 ",
  },
  { number: 18, message: "100일 아침 습관의 기적 " },
  { number: 19, message: "그대는 나의 여름이 되세요 " },
  { number: 20, message: "작별하지 않는다" },
  { number: 21, message: "파서블 " },
  { number: 22, message: "나는 배당투자로 매일 스타벅스 커피를 공짜로 마신다" },
  { number: 23, message: "시대예보: 핵개인의 시대 " },
  { number: 24, message: "인생은 순간이다" },
];
