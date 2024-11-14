//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const submitButton = document.getElementById("btn");
  const outputDiv = document.getElementById("output");

  async function displayTextWithDelay() {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    if (!text || isNaN(delay) || delay < 0) {
      outputDiv.textContent = "Please enter valid text and a positive delay.";
      return;
    }

    outputDiv.textContent = "Waiting...";
    const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await timeout(delay);
    outputDiv.textContent = text;
  }

  submitButton.addEventListener("click", displayTextWithDelay);
});
