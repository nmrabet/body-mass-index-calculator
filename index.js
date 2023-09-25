const radioBtns = document.querySelectorAll("input[name='radio-select']");

const metricView = document.getElementById("metric-view");
const imperialView = document.getElementById("imperial-view");

const metricHeight = document.getElementById("mheight");
const metricWeight = document.getElementById("mweight");
const score = document.getElementById("bmi-score");
const results = document.getElementById("BMI-result");

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

  let description = "";

  if (bmi < 18.5) {
    description = "a bit too thin";
  } else if (bmi > 18.5 && bmi < 25) {
    description = "a healthy weight";
  } else if (bmi > 25 && bmi < 30) {
    description = "overweight";
  } else if (bmi > 30) {
    description = "obese";
  }

  let idealWeight = 2.2 * bmi + 3.5 * bmi * (Number(metricHeight.value) - 1.5);

  results.innerHTML = `
  <h6>Your BMI is...</h6>
  <h2 id="bmi-score">${bmi.toFixed(1)}</h2>    
  <div>
    <p>
      Your BMI suggests you're <span>${description}.</span>
      Your ideal weight is <span>${idealWeight.toFixed(1)}.</span>
    </p>
  </div>
  `;
}

metricWeight.addEventListener("keyup", callMetricBMI);

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", selectMetric);
});
