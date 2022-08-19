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

function createArray (userInput) {
  keys = Array(userInput).keys();
  return Array.from(keys);
};

Test:"It should interpret numbers into responses"
Code:
const number_string = 1.toString()
messageOutput (number_string)
Expected Outcome: "Beep!"

function messageOutput (number) {
  const number_string = number.toString();
  for (let character of number_string) {
    if (character === "1") {
      return "Beep!";
    } else if (character === "2") {
      return "Boop!";
    } else if (character === "3") {
      return "Won't you be my neighbor?";
    }
      else return number_string;
   }
  };

Test: "It should iterate through the array of user input"
Code:
x = createArray(5)
for (let element of x) {
  numberResponse = messageOutput (element)
}
Expected Outcome: 0 Beep! Boop! Won't you be my neighbor 4
