const passwordArea = document.getElementById("password");
const background = document.getElementById("background");
passwordArea.addEventListener("input", (e) => {
  const input = e.target.value;
  const amountOfCharacters = input.length;
  const blurValue = 20 - amountOfCharacters * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
