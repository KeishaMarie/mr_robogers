
const userInput = 1
const userOutput = userInput.toString();

function sayBeep (userInput1) {
  let isOne
  if (userInput1 === "1") {
  isOne = true;
  } else {
    isOne = false;
  }
  if (isOne === true) {
    return "Beep!";
  }
};
