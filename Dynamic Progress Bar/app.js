const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i = 0;
const uploadPercent = [0, 10, 40, 48, 60, 85, 90, 92, 99, 100];

const interval = setInterval(() => {
  progress.style.width = `${uploadPercent[i]}%`;
  loading.innerHTML = uploadPercent[i] + "%";
  ++i;
  if (i == uploadPercent.length) {
    clearInterval(interval);
    loading.innerHTML = "completed!";
  }
}, 2000);
