document.querySelector("#mixerButton").addEventListener("click", function() {
  // Imagine clicking a mixer on and off.
  this.textContent = this.textContent === "ON" ? "OFF" : "ON";
  this.style.backgroundColor = this.textContent === "ON" ? "yellow" : "white";
});

document.querySelector("#sprinkleArea").addEventListener("mouseover", function() {
  // Imagine a sprinkle shower effect.
  this.style.animation = "sprinkle 2s infinite";
});
document.querySelector("#sprinkleArea").addEventListener("mouseout", function() {
  this.style.animation = "none";
});

document.addEventListener("keydown", function(e) {
  // Imagine typing ingredients.
  if (e.key === "Escape") {
    alert("Oops! You dropped the bowl. Let's clean up and start again!");
  }
});

// Bonus: Secret Action for a Double-Click
document.body.addEventListener("dblclick", function() {
  alert("Surprise! You've discovered the secret ingredient: a pinch of love 🥰");
});

// Interactive Elements 🍬🎮
// Change button text and color on click
let button = document.querySelector("#flavorButton");
button.addEventListener("click", function() {
  this.textContent = this.textContent === "Vanilla" ? "Chocolate" : "Vanilla";
  this.style.backgroundColor = this.textContent === "Vanilla" ? "white" : "brown";
});

// Form Validation 📋✅ (Baking Recipe Check)
document.querySelector("#recipeForm").addEventListener("input", function(e) {
  let emailField = document.querySelector("#email");
  let passwordField = document.querySelector("#password");

  let emailValid = /\S+@\S+\.\S+/.test(emailField.value);
  let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordField.value);

  emailField.classList.toggle("error", !emailValid);
  passwordField.classList.toggle("error", !passwordValid);

  // Real-time feedback
  if (!emailValid) emailField.nextSibling.textContent = "Please enter a valid email.";
  if (!passwordValid) passwordField.nextSibling.textContent = "Password must be at least 8 characters, including numbers and letters.";

  // Form submission validation (on form submission, typically with preventDefault)
  document.querySelector("#recipeForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    if (!emailValid || !passwordValid) {
      alert("Your recipe is missing key ingredients. Please check your input.");
      return false;
    }
    alert("Your dessert recipe is ready to be tasted. Well done, chef!");
  });
});

// CSS for sprinkle animation 
@keyframes sprinkle {
  0% { transform: translate(0, 0); }
  100% { transform: translate(0, -100px); }
}

/* Apply sprinkle animation to an element, for instance a sprinkle area */
#sprinkleArea {
  animation: none;
  width: 100px;
  height: 100px;
  background-image: url('sprinkles.png');
  background-size: contain;
}
