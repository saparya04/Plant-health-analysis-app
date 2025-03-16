const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");
const analyzeButton = document.getElementById("analyzeButton");
const resultDiv = document.getElementById("result");
const loadingDiv = document.getElementById("loading");
const downloadButton = document.getElementById("downloadButton");
const dropArea = document.getElementById("dropArea");
let analysisResult = "";
let analysisImage = "";

dropArea.addEventListener("click", () => imageInput.click());

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.style.backgroundColor = "#e8f4fd";
});

dropArea.addEventListener("dragleave", () => {
  dropArea.style.backgroundColor = "";
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.style.backgroundColor = "";
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    imageInput.files = e.dataTransfer.files;
    handleImageUpload(file);
  }
});

imageInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    handleImageUpload(file);
  }
});

function handleImageUpload(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    imagePreview.src = e.target.result;
    imagePreview.style.display = "block";
  };
  reader.readAsDataURL(file);
}

analyzeButton.addEventListener("click", async () => {
  const file = imageInput.files[0];
  if (!file) {
    alert("Please upload an image first.");
    return;
  }
  
  const formData = new FormData();
  formData.append("image", file);
  loadingDiv.style.display = "block";
  resultDiv.style.display = "none";
  downloadButton.style.display = "none";

  try {
    const response = await fetch("/analyze", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.result) {
      analysisResult = data.result;
      analysisImage = data.image;
      resultDiv.innerHTML = `<h3>Analysis Result:</h3><p>${analysisResult.replace(/\n/g, "<br>")}</p>`;
      resultDiv.style.display = "block";
      downloadButton.style.display = "block";
    } else if (data.error) {
      resultDiv.textContent = "Error: " + data.error;
      resultDiv.style.display = "block";
    }
  } catch (error) {
    resultDiv.textContent = "Error: " + error.message;
    resultDiv.style.display = "block";
  } finally {
    loadingDiv.style.display = "none";
  }
});

downloadButton.addEventListener("click", async () => {
  const response = await fetch("/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ result: analysisResult, image: analysisImage }),
  });
  if (response.ok) {
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Plant_Analysis_Report.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } else {
    alert("Failed to generate and download the PDF report.");
  }
});
