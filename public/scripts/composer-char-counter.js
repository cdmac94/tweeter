$(document).ready(function() {

  const text =  document.getElementById("tweet-text");
  const charLeft = document.getElementById("counter");
  const maxChars = 140;

  text.addEventListener("input", () => {
    const remaining = maxChars - text.value.length;
    charLeft.textContent = `${remaining}`;
    if (charLeft.textContent < 0) {
      charLeft.id = "neg-counter";
    }
    if (charLeft.textContent >= 0) {
      charLeft.id = "counter";
    }
  })
});