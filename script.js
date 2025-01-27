// Selecting elements
const steps = document.querySelectorAll(".step h3");
const lines = document.querySelectorAll(".step span");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentStep = 0;

function updateSteps() {
  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  lines.forEach((line, index) => {
    if (index < currentStep) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });

  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateSteps();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateSteps();
  }
});

updateSteps();
