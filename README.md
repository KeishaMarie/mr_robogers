# Mr. Roboger's Neighborhood

#### By Keisha Hepner

#### This web application gives you Mr. Roboger's message.

## Technologies Used

* CSS
* HTML
* JavaScript

## Description

This web application will give you a message replacing certain elements of your message with Mr. Rodoger's message based on the number you input.

## Setup/Installation Requirements

* Open your terminal and create a new folder with `mkdir` command. This is where your repository will be stored locally.
* Navigate to https://github.com/KeishaMarie/mr_robogers.git
* Click on the green code button to open dropdown and copy link to clone mr_robogers
* Open folder in your text editor.

## Known Bugs

* No known bugs

## MIT License

Copyright (c) [2022] [Keisha Hepner]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Tests


Describe: userInput.toString();<br>

Test: "It should turn the number to a string"<br>
Code:<br>
const userInput = 1<br>
const userOutput = userInput.toString();<br>
Expected Output = "1"<br>

Description: sayBeep(), sayBoop(), sayNeighbor()<br>

Test: "It should return the string 'Beep!' for numbers that start with the number 1"<br>
Code:<br>
const userInput1 = "1"<br>
sayBeep (userInput1)<br>
Expected Output: Beep!<br><br>

Test: "It should return the string 'Boop!' for numbers that start with the number 2"<br>
Code:<br>
const userInput2 = "2"<br>
sayBoop (userInput2)<br>
Expected Output: "Boop!"<br><br>

Test: "It should return the string "Won't you be my neighbor?" for numbers that start with the number 3"<br>
Code:<br>
const userInput3<br>
sayNeighbor(userInput3)<br>
Expected Outcome: "Won't you be my neighbor?"<br><br>


Description:function createArray (userInput)<br>

Test: "It should convert user's input into an array"<br>
Code:<br>
  keys = Array(userInput).keys();<br>
  return Array.from(keys);<br>
  createArray(10)<br>
Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<br><br>

Test:"It should interpret numbers into responses"<br>
Code:<br>
const number_string = 1.toString()<br>
messageOutput (number_string)<br>
Expected Outcome: "Beep!"<br><br>


Test: "It should iterate through the array of user input to display correct message."<br>
Code:<br>
x = createArray(5)<br>
for (let element of x) {<br>
  numberResponse = createMessageOutput (element)<br>
}<br>
Expected Outcome: 0 Beep! Boop! Won't you be my neighbor 4<br><br>

Test: It should interpret output based on hierarchy"<br>
Code:<br>
messageOutput(13)<br>
Expected Output: "Won't you be my neighbor?"<br><br>

Description: newUserArray.push()<br>

Test: "It should push userInput to the new array"<br>
Code:<br>
elementResponse = createMessageOutput (element)<br>
newUserArray.push(elementResponses)<br>
userInput(5)<br>
Expected Output: 0,Beep!,Boop!,Won't you be my neighbor,4<br><br>

Description: messageOutput = newArray.join(", ")<br>

Test: "It should make a space between elements."<br>
Code:<br>
userInput(5)<br>
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor, 4<br><br>


Description: parseInt(userInput)<br>

Test: "It should only allow numbers to be entered into the box"<br>
Code:<br>
userInput = parseInt(userInput)<br>
userInput = Keisha<br>
Expected Output: Nothing.<br>


