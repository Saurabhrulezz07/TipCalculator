  //store the value of the Bill Amount, Tip %, No. of People
  var bill = document.getElementById('billamount');
  var tip = document.getElementById('tip');
  var people = document.getElementById('noOfPeople');

  //Decrement the value of the tip in the input field
  function tipDecrement() {

    var tipValue = parseInt(tip.value);
    if (tipValue < 0) {
        alert("Tip can not be negative!!");
        tip.value = 0;
    }
    else {
        tipValue -= 1;
        tip.value = tipValue; 
    }
    calculateTipAndAmount();
    
  }

  //Increment the value of the tip in the input field
  function tipIncrement() {
    var tipValue = parseInt(tip.value);
    tipValue += 1;
    tip.value = tipValue;
    calculateTipAndAmount();
  }

  //Decrement the value of the No. of people in the input field
  function personDecrement() {
    var personValue = parseInt(people.value);
    if (personValue < 1) {
        alert("No. of People can not be Negative or Zero!");
        people.value = 1;
    }
    else {
        personValue -= 1;
        people.value = personValue;
    }
    calculateTipAndAmount();
  }

  //Increment the value of the No. of people in the input field
  function personIncrement() {
    var personValue = parseInt(people.value);
    personValue += 1;
    people.value = personValue;
    calculateTipAndAmount();
  }

  // Calculate the tip and amount to be paid per person
  function calculateTipAndAmount() {

    //check for bill amount is number
    if (isNaN(bill.value) == true ) {
      alert("Please Insert a Valid Positive Number!");
      bill.value = 0.00;
    }
    //check for bill amount is less than 0
    else if (parseFloat(bill.value) < 0) {
      alert("Bill Amount can not be Negative!");
      bill.value = 0.00;
    }
    //check for bill amount is empty
    else if (bill.value == "") {
      bill.value = 0.00;
    }

    //check for tip percentage is not number
    if (isNaN(tip.value) == true ) {
      alert("Please Insert a Valid Positive Number!");
      tip.value = 0;
    }
    //check for tip percentage is less than 0
    else if (parseInt(tip.value) < 0 ) {
      alert("Tip can not be Negative!");
      tip.value = 0;
    }

    //check for number of people is not a Valid Positive Number!
    if (isNaN(people.value) == true ) {
      alert("Please Insert a Valid Positive Number!");
      people.value = 1;
    }
    //check for no. of people less than or equal to 0
    else if (parseInt(people.value) <= 0) {
      alert("No. of People can not be Negative or Zero!");
      people.value = 1;
    }

    //calculate total Tip
    var totalTip = 0.00;
    if (parseInt(tip.value) > 0) {
      totalTip = parseFloat(bill.value) * (parseInt(tip.value) / 100);
    }

    // Tip Per Person
    var tipPerPerson = 0;
    if (people.value > 0) {
      tipPerPerson = totalTip / parseInt(people.value);
    }
    
    //Total amount Per Person
    var totalAmountPerPerson = parseFloat(bill.value);
    if (parseInt(people.value) > 0) {
      totalAmountPerPerson = (parseFloat(bill.value) / parseInt(people.value)) + tipPerPerson;
    }
    
    //Display tip and amount
    document.getElementById('tipPP').innerHTML = "$" + tipPerPerson.toFixed(2);  
    document.getElementById('totalAmount').innerHTML = "$" + totalAmountPerPerson.toFixed(2); 
    
    //Set value of bill is empty string.
    if (parseInt(bill.value) === 0) {
      bill.value = "";
    }                      
  }