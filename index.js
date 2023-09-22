const radioBtns = document.querySelectorAll("input[name='radio-select']");

const metricView = document.getElementById("metric-view");
const imperialView = document.getElementById("imperial-view");

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

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", selectMetric);
});
