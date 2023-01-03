function commissionCalculator(sales) {
    if (sales >= 60000) {
        return sales * .08;
    } else if (sales >= 55000) {
        return sales * .075;
    } else if (sales >= 50000) {
        return sales * .07;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    } else if (sales >= 45000) {
        return sales * .065;
    } else if (sales >= 40000){
        return sales * .06;
    } else if (sales >= 35000) {
        return sales * .055;
    } else if (sales >= 30000) {
        return sales * .05;
    } else if (sales >= 25000) {
        return sales * .045;
    } else if (sales >= 20000) {
        return sales * .04;
    } else if (sales >= 15000) {
        return sales * .035;
    } else if (sales >= 10000) {
        return sales * .03;
    } else {
        return 0;
    }
  }



  
  function calculate() {
    console.log("Calculating..."); // added this line to check if the function is being called
    var sales = document.getElementById("sales").value;
    var result = commissionCalculator(sales);
    document.getElementById("commission").textContent = "Your pre-tax commission for the week is $" + result + "!";
  }


  function clearMe() {
    console.log(document.getElementById('sales'));
    console.log(document.getElementById('commission'));
    document.getElementById('sales').value = '';
    document.getElementById('commission').innerHTML = '';
  }

 


  // Adds the sum of all weekly number input into the monthly calculator //

  
  function totalPay() {
    // Initialize the total to 0
    let total = 0;
  
    // Get all of the input fields
    let inputFields = document.querySelectorAll("#box2 input[type='text']");
  
    // Iterate through the input fields
    for (let i = 0; i < inputFields.length; i++) {
      // Get the value of the current input field
      let value = inputFields[i].value;
  
      // Check if the value is a number
      if (!isNaN(value) && value !== "") {
        // If it is a number, add it to the total
        total += parseInt(value);
      }
    }
  
    // Display the total
    document.querySelector("#total").innerHTML = "Your monthly total is $" + total + "!";
  }


  //Will clear the input fields and the total monthly pay//

  function clearMonthly() {
    console.log(document.getElementById('total'));
    document.getElementById('total').innerHTML = '';
    document.getElementById('week1').value = '';
    document.getElementById('week2').value = '';
    document.getElementById('week3').value = '';
    document.getElementById('week4').value = '';
    document.getElementById('week5').value = '';
    document.getElementById('box2').reset();
  }
  
  


  
  
  
  
  

















    
 





  


 

   




  
  


  


  

