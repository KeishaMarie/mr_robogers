
window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    document.querySelector("span#messageOutput").innerText = userInput;
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const userInput = document.getElementById("userInput").value;
  document.querySelector("span#messageOutput").innerText = userInput; 
}

window.addEventListener("load", function() {
  document.querySelector("form#numberToWord").addEventListener("submit", handleFormSubmission);
});

// Business Logic

function createArray (userInput) {
  keys = Array(userInput).keys();
  return Array.from(keys);
};

x = createArray()
for (let element of x) {
  numberResponse = messageOutput (element)
};

function messageOutput (number) {
  const number_string = number.toString();

    if (number_string.includes("3")) {
      return "Won't you be my neighbor?";
    } else if (number_string.includes("2")) {
      return "Boop!";
    } else if (number_string.includes("1")) {
      return "Beep!";
    }
      else return number_string;
  };

