function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("bmi-result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "Please enter valid height and weight.";
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  result.textContent = `Your BMI is ${bmi.toFixed(1)}.`;
}
