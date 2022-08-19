Describe: numberToWord()

Test: "It should turn the number to a string"
Code:
const userInput = 1
const userOutput = userInput.toString();
Expected Output = "1"

Test: "It should return the string 'Beep!' for numbers that contain the number 1"
Code:
const userInput1 = "1"
sayBeep (userInput1)
Expected Output: Beep!

<!-- function sayBeep (userInput1) {
  let isOne
  if (userInput1 === "1") {
  isOne = true;
  } else {
    isOne = false;
  }
  if (isOne === true) {
    return "Beep!";
  }
}; -->


Test: "It should return the string 'Boop!' for numbers that contain the number 2"
Code:
const userInput2 = "2"
sayBoop (userInput2)
Expected Output: "Boop!"

Test: "It should return the string "Won't you be my neighbor?" for number that contain the number 3"
Code:
const userInput3
sayNeighbor(userInput3)
Expected Outcome: "Won't you be my neighbor?"




Test: "It should convert user's input into an array"

function createArray (userInputNumber) {
  return Array(userInputNumber).keys()
};

