Describe: userInput.toString();

Test: "It should turn the number to a string"
Code:
const userInput = 1
const userOutput = userInput.toString();
Expected Output = "1"

Test: "It should return the string 'Beep!' for numbers that start with the number 1"
Code:
const userInput1 = "1"
sayBeep (userInput1)
Expected Output: Beep!

Test: "It should return the string 'Boop!' for numbers that start with the number 2"
Code:
const userInput2 = "2"
sayBoop (userInput2)
Expected Output: "Boop!"

Test: "It should return the string "Won't you be my neighbor?" for numbers that start with the number 3"
Code:
const userInput3
sayNeighbor(userInput3)
Expected Outcome: "Won't you be my neighbor?"


Description:function createArray (userInput)

Test: "It should convert user's input into an array"
Code:
  keys = Array(userInput).keys();
  return Array.from(keys);
  createArray(10)
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Test:"It should interpret numbers into responses"
Code:
const number_string = 1.toString()
messageOutput (number_string)
Expected Outcome: "Beep!"


Test: "It should iterate through the array of user input"
Code:
x = createArray(5)
for (let element of x) {
  numberResponse = messageOutput (element)
}
Expected Outcome: 0 Beep! Boop! Won't you be my neighbor 4

Test: It should interpret output based on hierarchy"
Code:
messageOutput(13)
Expected Output: "Won't you be my neighbor?"

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

