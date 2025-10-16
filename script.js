const btn = document.querySelector(".qr-btn");
const container = document.querySelector(".container");
const resultContainer = document.querySelector("#result-container");

btn.addEventListener("click", () => {
  const qrText = document.querySelector("input").value;

  container.style.display = "none";
  resultContainer.style.display = "flex";

  const qrCode = new QRCode(document.getElementById("qrcode"), {
    text: qrText,
    width: 128,
    height: 128,
  });
});
