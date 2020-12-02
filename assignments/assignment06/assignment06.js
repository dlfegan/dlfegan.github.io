// ----- CIS255 - Fegan - Assignment06 -----


// --- global variables ---
var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 

let interestRate = 0;
let int = 0;
let payments;

  // --------- Commonly Used Functions() ---------
  // --- function toComma() ---
function toComma(value) { 
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}   //  END of toComma function
    // ---------------------------------------------------------
    // --- function toMoney() --- 
    // --- adds .toFixed(2) to the toComma(value) ---
let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`; 
}   // END of toMoney function

    // ---------------------------------------------------------
    // #4 Store/retrieve loans array using localStorage
    // #4 Store loans array into localStorage and save it in the file (assignment06)
    //stringfiy the loans array and make it JSON so it can read into local storage using .setItem and can be read out using .getItem
let storeForm = () => {
  localStorage.setItem(`assignment06`, JSON.stringify(loans));
}
  // ---------------------------------------------------------

 
let retrieveForm = () => {
  if(localStorage.getItem(`assignment06`) != null){ 
     loans = JSON.parse(localStorage.getItem(`assignment06`));
     updateForm();
  } else {
     alert(`Error: no values saved in localStorage`);
  }
}
 // #4(above) Retrieve loans array from localStorage saved under(assignment06)
  //the if makes sure there that 'assignments' is in localStorage and does NOT = null(not there). else it alerts the user with the message of no values saved into the localStorage, so .setItem must happen first
  // ---------------------------------------------------------

  // --- function: loadDoc() ---

function loadDoc() {
  
  // pre-fill defaults for first loan year
  //Jquery instead of pure JS, 
  var defaultYear = loans[0].loan_year;
  $("#loan_year0" + 1).val(defaultYear++);
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int0" + 1).val(defaultInterestRate);
  var loanWithInterest 
    = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toMoney(loanWithInterest));
    
  // pre-fill defaults for other loan years
  for(var i=2; i<6; i++) {
    $(`#loan_year0${i}`).val(defaultYear++);
    $(`#loan_year0${i}`).attr("disabled","true");
    $(`#loan_year0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
    $(`#loan_int0${i}`).val(defaultInterestRate);
    $(`#loan_int0${i}`).attr("disabled","true");
    $(`#loan_int0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    loanWithInterest 
      = (loanWithInterest + defaultLoanAmount) 
      * (1 + defaultInterestRate);
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
    } // end: "for" loop
  
  // all input fields: select contents on fucus
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
    updateLoansArray();
  });
  
  // set focus to first year: messes up codepen
  // $("#loan_year01").focus();
 // $("#loan_year01").blur( function() {
   // updateLoansArray();
  //});
  
} // end: function loadDoc()



// Create function with regular expressions to validate user input
// updates the loans Array(pink box) and chagnes the css if user input does not match the regular expressions for the specific input fields

function updateLoansArray() {
  
  // #3 Regular expressions for the imput fields
  // year,amount,int Rate Regualar Expressions
  // regex: ^ = starts with
  // regex: $ = ends with
  let yearRegex = /^(19|20)\d{2}$/;   
          //first 2 inputted must be numbers 19, or 20 because of (19|20) \d makes sure its a digit and {2} makes sure there are 2 more digits entered after either 19 or 20.

  let amtRegex = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;  
          //the first part makes you to enter a digit between 1-9 because we dont want to start with a 0. and then [0-9] allows you to enter as many digits you want after that are between 0-9. the second half .[0-9]{1,2} hardcodes the (.) in and at the end becasue of the (?) afterwards and is one or 2 numbers between 0-9. the (+)appends the two together

  let intRegex = /^(0|)+(.[0-9]{1,5})?$/;   
             //the first part is the left side of the (.) making it always 0. (+) appends the second piece to the first. hard code in the (.) and follow with {1-5} numbers that are between [0-9].  

  // ---------------------------------------------------------         
          // --- #3 Regex if test to validate user input ---
         // (!) means not, so if its not in the yearRegex formart when it is testing the class loan_year01's value = false because the format is not the same as the yearRegex format, so then do this(the following code below).
        // ---------------------------------------------------------
  let valid = true;
  if(!yearRegex.test($(`#loan_year01`).val())){
    valid = false;    
    $(`#loan_year01`).css("background-color", "red"); // --- make the load_year input section background-color red if the test = false ---
  }
   // --- for is used to add the index in the amount column of the table/array so if there is input in any of the boxes that is not the same format as the amountRegex then it turns background color red for those specific {i} indexes for loan_amt0{i} ---
  for (i = 1; i < 6; i++) {
    if(!amtRegex.test($(`#loan_amt0${i}`).val())) {
      valid = false;
      $(`#loan_amt0${i}`).css("background-color", "red");
    } 
  } // END for
    // ---------------------------------------------------------
    
    // Test the interst Rate regex, changes background-color to red if regex is not the same as specified as above.
  if(!intRegex.test($(`#loan_int01`).val())) {
    valid = false;
    $(`#loan_int01`).css("background-color", "red");
  }
  // --- Set valid = true above ---
  // ---#2 JQuery to update the table when user inputs into year,amount,intRate ---
  if(valid) {
  loans[0].loan_year = parseInt($("#loan_year01").val());
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
      $("#loan_year0"+ (i+1) ).val(loans[i].loan_year);
    } //END for
    for(i = 1; i<6; i++){
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);  //amount inside the for because it will change
      loans[i-1].loan_amount = amt;
    } // END for
      let rate = parseFloat($("#loan_int01").val()); //intRate not in for because it should stay the same 
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = rate;
    }
    
    updateForm(); // calls the function updateForm()
    
  }   // END if(valid)
}     //END updateLoansArray() function
      // ---------------------------------------------------------


  // --- create updateForm function ---
let updateForm = () =>{
  loanWithInterest = 0;
  let totalAmt = 0;
  for(i = 1; i < 6; i++) {
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
    let amt = loans[i - 1].loan_amount;
    $(`#loan_amt0${i}`).val(amt);
    totalAmt += parseFloat(amt);
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
    loanWithInterest 
      = (loanWithInterest + parseFloat(amt)) 
      * (1 + loans[0].loan_int_rate);
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  }
  int = loanWithInterest - totalAmt;
  $(`#loan_int_accrued`).text(toMoney(int));
 
  // #4 Store/Retrieve loans array data
  // First must stringfiy the loans array and make it JSON to save to localStorage
  //
 // saveForm();
 // loadForm();
  
} // end: function updateForm()
  // ---------------------------------------------------------


 // #5 CREATE AngularJS here:         (simple example AngularJS)
 // #5 initialize loanApp variable with (myApp) from HTML and make it an array[]
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  $scope.payments = [];
  $scope.populate = function () {
    
    updateForm();
    
    let total = loanWithInterest;
    let iRate = loans[0].loan_int_rate;
    let r = iRate / 12;
    let n = 11;
    //loan payment formula
    //https://www.thebalance.com/loan-payment-calculations-315564
    //Yearly payment, used link from examle given (best example)and also google (yearly loan payment formula - some examples found)
    let pay = 12 * (total / ((((1+r)**(n*12))-1)/(r *(1+r)**(n*12))));
    //#5 Loop through 10 times for the next 10 years of payments to display using AngularJS
    for (let i = 0; i < 10; i++) {
      total -= pay 
      let int = total * (iRate); 
      $scope.payments[i] = {
        "year":loans[4].loan_year + i + 1,
        "payment": toMoney(pay), 
        "amt": toMoney(int),
        "ye": toMoney(total += int)
      }
    }
    // #5 the loan_year will get 11 added to it so after the above code does years 1-10
    // the code below is for the 11th year to display to the screen
    $scope.payments[10] = {
      "year":loans[4].loan_year + 11,
      "payment": toMoney(total),
      "amt": toMoney(0),    // set interest Amount to 0
      "ye":toMoney(0)       // set year end total to 0
    }
  }
});
// ---------------------------------------------------------
