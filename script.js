const btn = document.querySelector(".qr-btn");
const container = document.querySelector(".container");
const resultContainer = document.querySelector("#result-container");

btn.addEventListener("click", () => {
  const qrText = document.querySelector("input").value;

  if (!qrText.trim()) {
    alert("Please enter a valid URL");
    return;
  }

  container.style.display = "none";
  resultContainer.style.display = "flex";

  const qrCode = new QRCode(document.getElementById("qrcode"), {
    text: qrText,
    width: 150,
    height: 150,
  });
});

const download = document.querySelector("#download-btn");

download.addEventListener("click", () => {
  const qrCode = document.querySelector("#qrcode img");

  download.setAttribute("href", qrCode.src);
  download.setAttribute("download", "qrcode.png");
});

const share = document.querySelector("#share-btn");

share.addEventListener("click", () => {
  const qrCode = document.querySelector("#qrcode img");
  const qrUrl = qrCode.src;

  const tempInput = document.createElement("textarea");
  tempInput.value = qrUrl;
  document.body.appendChild(tempInput);

  // Select and copy the text inside the textarea
  tempInput.select();
  document.execCommand("copy");

  // Remove the temporary textarea from the DOM
  document.body.removeChild(tempInput);

  alert("Copied qr code image url");
});
