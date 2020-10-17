let elem = [];
let totals = [];

// assign variables to the elem ID in the html
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
elem[19]  
  = document.getElementById("totals");


// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
//Made each button have its own function
//to add one to its specific hole
// Could i have done this using a loop?
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
// Could i have done this using a loop?
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
 
  // Got it so the score can NOT
  // go over 8! probably could have done it another way. by elem.children[2].innerHTML isnt double the currentScore.
  if(elem.children[2].innerHTML == "-")
    elem.children[2].innerHTML = "1";
  else if (elem.children[2].innerHTML <= 7) {
    currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }  
  else {

    elem.children[2].innerHTML = currentScore;

} // END Function add1
  
// 3-A: calculate over for + button 
    elem.children[3].innerHTML = elem.children[2].innerHTML - elem.children[1].innerHTML;

}     

//2: subtract from each - button
// got it so each score can NOT be negative!
// create an "subtract1" function
//Made each button have its own function
//to subtract one to its specific hole
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-", elem.children[2].innerHTML <="0")
    elem.children[2].innerHTML = "0";
  else {
     currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;

  }

 
  
  
// 3: calculate over for - button
// Maybe should have made a function for this? 
// and a function for this to put here and 
// for the + button?  
    
  elem.children[3].innerHTML = elem.children[2].innerHTML - elem.children[1].innerHTML; 

  
} // END Function subtract1  
  
// 4  : Totals: 

// 4-C: Over: letoverTotal

// 4-A: Par: let parTotal
// Create variables for each par
// and convert innerHTML to an integer
let par1 = elem[1].children[1].innerHTML;
par1 = Number.parseInt(par1);
let par2 = elem[2].children[1].innerHTML;
par2 = Number.parseInt(par2);
let par3 = elem[3].children[1].innerHTML;
par3 = Number.parseInt(par3);
let par4 = elem[4].children[1].innerHTML;
par4 = Number.parseInt(par4);
let par5 = elem[5].children[1].innerHTML;
par5 = Number.parseInt(par5);
let par6 = elem[6].children[1].innerHTML;
par6 = Number.parseInt(par6);
let par7 = elem[7].children[1].innerHTML;
par7 = Number.parseInt(par7);
let par8 = elem[8].children[1].innerHTML;
par8 = Number.parseInt(par8);
let par9 = elem[9].children[1].innerHTML;
par9 = Number.parseInt(par9);
let par10 = elem[10].children[1].innerHTML;
par10 = Number.parseInt(par10);
let par11 = elem[11].children[1].innerHTML;
par11 = Number.parseInt(par11);
let par12 = elem[12].children[1].innerHTML;
par12 = Number.parseInt(par12);
let par13 = elem[13].children[1].innerHTML;
par13 = Number.parseInt(par13);
let par14 = elem[14].children[1].innerHTML;
par14 = Number.parseInt(par14);
let par15 = elem[15].children[1].innerHTML;
par15 = Number.parseInt(par15);
let par16 = elem[16].children[1].innerHTML;
par16 = Number.parseInt(par16);
let par17 = elem[17].children[1].innerHTML;
par17 = Number.parseInt(par17);
let par18 = elem[18].children[1].innerHTML;
par18 = Number.parseInt(par18);


// calculation to add all pars for parTotal
elem[19].children[1].innerHTML = par1 + par2 + par3 + par4 + par5 + par6 + par7 + par8 + par9 + par10 + par11 + par12 + par13 + par14 + par15 + par16 + par17 + par18;

// 4-B: Score: let scoreTotal
// Create variables for each score
// and convert innerHTML to an integer
let score1 = elem[1].children[2].innerHTML;
score1 = Number.parseInt(score1);
let score2 = elem[2].children[2].innerHTML;
score2 = Number.parseInt(score2);
let score3 = elem[3].children[2].innerHTML;
score3 = Number.parseInt(score3);
let score4 = elem[4].children[2].innerHTML;
score4 = Number.parseInt(score4);
let score5 = elem[5].children[2].innerHTML;
score5 = Number.parseInt(score5);
let score6 = elem[6].children[2].innerHTML;
score6 = Number.parseInt(score6);
let score7 = elem[7].children[2].innerHTML;
score7 = Number.parseInt(score7);
let score8 = elem[8].children[2].innerHTML;
score8 = Number.parseInt(score8);
let score9 = elem[9].children[2].innerHTML;
score9 = Number.parseInt(score9);
let score10 = elem[10].children[2].innerHTML;
score10 = Number.parseInt(score10);
let score11 = elem[11].children[2].innerHTML;
score11 = Number.parseInt(score11);
let score12 = elem[12].children[2].innerHTML;
score12 = Number.parseInt(score12);
let score13 = elem[13].children[2].innerHTML;
score13 = Number.parseInt(score13);
let score14 = elem[14].children[2].innerHTML;
score14 = Number.parseInt(score14);
let score15 = elem[15].children[2].innerHTML;
score15 = Number.parseInt(score15);
let score16 = elem[16].children[2].innerHTML;
score16 = Number.parseInt(score16);
let score17 = elem[17].children[2].innerHTML;
score17 = Number.parseInt(score17);
let score18 = elem[18].children[2].innerHTML;
score18 = Number.parseInt(score18);

let totalScore = elem[19].children[2].innerHTML;
totalScore = Number.parseInt(totalScore);
elem[19].children[2].innerHTML = Number.parseInt(elem[19].children[2].innerHTML)
elem[19].children[2].innerHTML = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15 + score16 + score17 + score18;

//Notes To Self
//elem.children[0] = hole
//elem.children[1] = par
//elem.children[2] = score
//elem.children[3] = over
//elem.children[4].children[0] = positive buttons
//elem.children[4].children[1] = negative buttons









  

