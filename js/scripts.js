
const userInput = 1
const userOutput = userInput.toString();

function createArray (userInput) {
  keys = Array(userInput).keys();
  return Array.from(keys);
};

x = createArray(5)
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