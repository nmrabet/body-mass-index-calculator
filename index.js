const radioBtns = document.querySelectorAll("input[name='radio-select']");

const metricView = document.getElementById("metric-view");
const imperialView = document.getElementById("imperial-view");

const metricHeight = document.getElementById("mheight");
const metricWeight = document.getElementById("mweight");
const score = document.getElementById("bmi-score");

function selectMetric() {
  let selected = document.querySelector(
    "input[name='radio-select']:checked"
  ).value;
  if (selected === "metric") {
    metricView.style.display = "block";
    imperialView.style.display = "none";
  } else {
    metricView.style.display = "none";
    imperialView.style.display = "block";
  }
}

function callMetricBMI() {
  let bmi = Number(metricWeight.value) / Number(metricHeight.value) ** 2;
  score.innerHTML = bmi.toFixed(1);
}

metricWeight.addEventListener("keyup", callMetricBMI);

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", selectMetric);
});
