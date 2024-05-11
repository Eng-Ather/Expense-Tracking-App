/********************* decleration variable and geting id  *****************************/
var saving = document.getElementById("saving"); // to display the balance
var record = document.getElementById("record"); // for transaction history
var total = 0; // for calculating expence/income
var Deposit = []; // to keep record of incomming cash
var Widthral = []; // to keep record of outgoing cash

/********************* Date And time CAlculation start her  *****************************/
var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var hours = d.getHours();
var minnut = d.getMinutes();
var time = 0;

// to convert time in 12 hour formate
if (hours > 12) {
  hours = hours - 12;
  time = `${hours}:${minnut} pm`;
} // in day time
else {
  time = `${hours}:${minnut} am`;
} // in evening

/********************* Date And time CAlculation END her  *****************************/

/*************************** Income Function Start here  ********************************/
function income() {
  var input = document.getElementById("input").value;
  total = total + Number(input); // converting input value in numeric form to avoid concatination
  saving.innerText = "Balance = " + total; // adding income in total balance

  //updating transaction history
  if (input) {
    Deposit.push(input);
    record.innerText = ` Last Transaction \n 
  ${input}/= deposited at ${time} on dated : ${date} : ${month} : ${year} `;
  }
  input = 0; // avoid garbage value
  document.getElementById("input").value = ""; // to empty input field
}
/*************************** Income Function End here  ********************************/

/*************************** expence Function Start here  ********************************/

function expence() {
  var expence = document.getElementById("input").value;

  if (total < expence) {
    alert("Insufficient Balance for this transaction.");
  } else {
    total = total - expence;
    saving.innerText = "Balance = " + total;

    //updating transaction history
    if (expence) {
      Widthral.push(expence);
      record.innerText = ` Last Transaction \n 
    ${expence}/=   widthdraw at ${time} on dated = ${date} : ${month} : ${year} `;
    }
    expence = 0; // clearing value to avoid carbeg value
    document.getElementById("input").value = ""; // to empty input field
  }
}
/*************************** Expense Function end here  ********************************/

