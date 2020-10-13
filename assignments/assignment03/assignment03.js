let elem = [];

// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");
elem[2]
  = document.getElementById("2");
elem[3]
  = document.getElementById("3");
elem[4]
  = document.getElementById("4");
elem[5]
  = document.getElementById("5");
elem[6]
  = document.getElementById("6");
elem[7]
  = document.getElementById("7");
elem[8]
  = document.getElementById("8");
elem[9]
  = document.getElementById("9");
elem[10]
  = document.getElementById("10");
elem[11]
  = document.getElementById("11");
elem[12]
  = document.getElementById("12");
elem[13]
  = document.getElementById("13");
elem[14]
  = document.getElementById("14");
elem[15]
  = document.getElementById("15");
elem[16]
  = document.getElementById("16");
elem[17]
  = document.getElementById("17");
elem[18]
  = document.getElementById("18");


// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//Made each button have its own function
//to add one to its specific hole
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]);};
elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]);};
elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]);};
elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6]);};
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]);};
elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]);};
elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9]);};
elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10]);};
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]);};
elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]);};
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13]);};
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]);};
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]);};
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]);};
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]);};
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]);};

// assign a function to the - button
//Made each button have its own function
//to subtract one to its specific hole
elem[1].children[4].children[1].onclick
  = function(){subtract1(elem[1]);};
elem[2].children[4].children[1].onclick 
  = function(){subtract1(elem[2]);};
elem[3].children[4].children[1].onclick 
  = function(){subtract1(elem[3]);};
elem[4].children[4].children[1].onclick 
  = function(){subtract1(elem[4]);};
elem[5].children[4].children[1].onclick 
  = function(){subtract1(elem[5]);};
elem[6].children[4].children[1].onclick 
  = function(){subtract1(elem[6]);};
elem[7].children[4].children[1].onclick 
  = function(){subtract1(elem[7]);};
elem[8].children[4].children[1].onclick 
  = function(){subtract1(elem[8]);};
elem[9].children[4].children[1].onclick 
  = function(){subtract1(elem[9]);};
elem[10].children[4].children[1].onclick 
  = function(){subtract1(elem[10]);};
elem[11].children[4].children[1].onclick 
  = function(){subtract1(elem[11]);};
elem[12].children[4].children[1].onclick 
  = function(){subtract1(elem[12]);};
elem[13].children[4].children[1].onclick 
  = function(){subtract1(elem[13]);};
elem[14].children[4].children[1].onclick 
  = function(){subtract1(elem[14]);};
elem[15].children[4].children[1].onclick 
  = function(){subtract1(elem[15]);};
elem[16].children[4].children[1].onclick 
  = function(){subtract1(elem[16]);};
elem[17].children[4].children[1].onclick 
  = function(){subtract1(elem[17]);};
elem[18].children[4].children[1].onclick 
  = function(){subtract1(elem[18]);};

let currentScore=0;
let over;
//1: addtion to each + button
// make it so they cannot double par(8)
// create an "add1" function
function add1 (elem) {
  let counter = 8;
 
  if(elem.children[2].innerHTML == "-")
    elem.children[2].innerHTML = "1";
  else if (currentScore <= 7) {
    currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }  
  else {

    elem.children[2].innerHTML = currentScore;

  }
// 3: calculate over  
    elem.children[3].innerHTML = elem.children[2].innerHTML - 4;

}     

//2: subtract from each - button
// make it so each score can NOT be negative
// create an "subtract1" function
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-", elem.children[2].innerHTML <="0")
    elem.children[2].innerHTML = "0";
  else {
     currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;

  }

  
// 3: calculate over  
    elem.children[3].innerHTML = elem.children[2].innerHTML - 4; 

  
// 4: set yellow background for the
//    over of 0.
function yellow() {
  
}



}

  

/* your mission: 

1. Make all the + buttons add 1 to the score of the hole. Do not allow the score to exceed double the par. 
2. Make all the - buttons subtract 1 from the score of the hole. Do not allow the score to be negative!
3. Make the "Over" column display the difference, score - par, of the hole.
4. Make a table row's background color yellow if and only if that table row has a nonzero score.
5. Make the HTML table row with id="totals" display appropriate totals. Totals should be computed only for holes that have yellow-highlighted nonzero scores. Like the yellow-highlighted table rows above, the "totals" table row background color must be yellow if and only if it has a nonzero score. 
6. Add to the Action column a new button, C, which clears the current score for a given hole, and re-sets the table row background color to default.
7. Replace HTML table row code with JavaScript code that appends table rows. That is, delete the HTML elements with ID's 1 through 18, and write a function that loops 18 times, appending the appropriate DOM elements with ID's 1 through 18.  
8. Add a "RESET" button which clears all user-entered data. Use addEventListener method to add functionality to the button. See: https://www.w3schools.com/js/js_htmldom_eventlistener.asp. 
9. Add an "ABOUT" button which displays the message, "Golf Scorecard 1.0. All rights reserved."  Use an arrow function to add the "ABOUT" button to the DOM. See: https://www.w3schools.com/Js/js_arrow_function.asp.
10. Add a "FONT" button which toggles the font size of the entire app, from/to smaller to/from larger.
*. Advanced (optional): put circles around scores that are birdies, and squares around scores that are bogeys!
*/
