const radioBtns = document.querySelectorAll("input[name='radio-select']");

const metricView = document.getElementById("metric-view");
const imperialView = document.getElementById("imperial-view");

const metricHeight = document.getElementById("mheight");
const metricWeight = document.getElementById("mweight");

const ftHeight = document.getElementById("ftHeight");
const inHeight = document.getElementById("inHeight");

const stWeight = document.getElementById("stWeight");
const lbsWeight = document.getElementById("lbsWeight");

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
  } else if (bmi > 30 && bmi > 40) {
    description = "obese";
  } else if (bmi > 40) {
    description = "morbidly obese";
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

function callImperialBMI() {
  let BMI = (Number(stWeight.value * 14 + lbsWeight.value) / Number(ftHeight.value * 12 + inHeight.value) ** 2) * 703;

  let description = "";

  if (BMI < 18.5) {
    description = "a bit too thin";
  } else if (BMI > 18.5 && BMI < 25) {
    description = "a healthy weight";
  } else if (BMI > 25 && BMI < 30) {
    description = "overweight";
  } else if (BMI > 30 && BMI > 40) {
    description = "obese";
  } else if (BMI > 40) {
    description = "morbidly obese";
  }

  results.innerHTML = `
  <h6>Your BMI is...</h6>
  <h2 id="bmi-score">${BMI.toFixed(1)}</h2>    
  <div>
    <p>
      Your BMI suggests you're <span>${description}.</span>
    </p>
  </div>
  `;
}

lbsWeight.addEventListener("keyup", callImperialBMI);
metricWeight.addEventListener("keyup", callMetricBMI);

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", selectMetric);
});
