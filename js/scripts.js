
// Business Logic

function createArray (userInput) {
  keys = Array(userInput).keys();
  return Array.from(keys);
};

// x = createArray()
// for (let element of x) {
//   numberResponse = messageOutput (element)
// };

function createMessageOutput (number) {
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

  //UI Logic

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    let userInput = document.querySelector("input#userInput").value;
    userInput = parseInt(userInput)
    userArray = createArray(userInput);
    newUserArray = []
    for (let element of userArray ) {
      elementResponse = createMessageOutput (element)
      newUserArray.push(elementResponse)
    };
    messageOutput = newUserArray.join(", ");
    document.getElementById("messageOutput").innerText = messageOutput;
  };
};

window.addEventListener("load", function() {
  const form = document.getElementById("numberToWord")
  form.addEventListener("submit", createMessageOutput);
});
