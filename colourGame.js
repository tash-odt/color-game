document.addEventListener("DOMContentLoaded", () => {
  const colors = ["#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#3498db", "#9b59b6"];
  let score = 0;

  const targetBox = document.getElementById("targetBox");
  const output = document.getElementById("output");
  const scoreDisplay = document.getElementById("score");
  const guessBoxes = document.querySelectorAll(".guessBox");
  const newGameButton = document.getElementById("newGameButton");

  function shuffleColors() {
      const shuffledColors = [...colors].sort(() => Math.random() - 0.5);

      guessBoxes.forEach((box, index) => {
          box.style.backgroundColor = shuffledColors[index];
          box.setAttribute("data-color", shuffledColors[index]);
      });

      const randomIndex = Math.floor(Math.random() * shuffledColors.length);
      targetBox.style.backgroundColor = shuffledColors[randomIndex];
      targetBox.setAttribute("data-color", shuffledColors[randomIndex]);
  }

  function handleGuess(event) {
      const selectedColor = event.target.getAttribute("data-color");
      const targetColor = targetBox.getAttribute("data-color");

      if (selectedColor === targetColor) {
          output.innerHTML = "✅ Correct!";
          score += 10;
      } else {
          output.innerHTML = "❌ Wrong! Try Again.";
          score = 0;
      }

      scoreDisplay.innerHTML = `Score: ${score}`;

      // Change colors after every guess
      shuffleColors();
      setTimeout(() => {
        output.innerHTML = "Guess...";
      }, 500); // sets a 0.5s timer to chnage output to "Pick the correct color!"
  }

  guessBoxes.forEach((box) => {
      box.addEventListener("click", handleGuess);
  });

  newGameButton.addEventListener("click", () => {
      shuffleColors();
      output.innerHTML = "Pick the correct color!";
  });

  shuffleColors();
});
