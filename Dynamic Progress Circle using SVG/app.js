const progress = document.querySelector(".progress");
const loading = document.querySelector(".loading");

let i = 0;
const uploadPercent = [0, 10, 25, 40, 42, 60, 70, 75, 90, 100];



const circle = document.querySelector(".progress-circle");

const circumference = circle.getTotalLength();

const interval = setInterval(() => {
  circle.style.strokeDashoffset =
    circumference - (uploadPercent[i] / 100) * circumference;
  loading.innerHTML = uploadPercent[i] + "%";
  i++;
  if (i == uploadPercent.length) {
    clearInterval(interval);
    loading.innerHTML = "DONE!";
  }
}, 1000);
