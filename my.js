
var personalSpending = () => {
  var percent = parseFloat(document.getElementById('text2').value);
   var paycheck = parseFloat(document.getElementById('text1').value);
     personalSpendingAmount = Math.floor(100 *(paycheck * percent))/100;
       document.getElementById('calculatedPS').innerHTML = personalSpendingAmount;
} 


const whichGasPrice = () => {
  var gasType = document.getElementById('text3').value;
  if (gasType === 'regular'){
    return 3.481
  } else if (gasType === 'mid-grade'){
    return 3.897
  } else if (gasType === 'premium'){
    return 4.322
  } else {
    return 'Please enter valid gas type'
  }
}
 

const gasSpending = () => {
  var howManyMiles = parseFloat(document.getElementById('text4').value);
    var milesToGallon = parseFloat(document.getElementById('text5').value);
      let gasUsed = howManyMiles / milesToGallon; 
        let gasSpendingAmount = Math.floor(100 *(gasUsed * whichGasPrice()))/100; 
          document.getElementById('calculatedGS').innerHTML = gasSpendingAmount;
}

const monthlyInsurance = () => {
  cost = parseFloat(document.getElementById('text6').value)
    let month = cost * 12;
      var monthlyInsuranceSpending = Math.round(100 * month / 52)/100;
        document.getElementById('calculatedMIS').innerHTML = monthlyInsuranceSpending;
}

var ps = personalSpending();
var gs = gasSpending();
var mi = monthlyInsurance();


function savingsLeft(){
    var amount = ps + gs + mi;
     var paycheck = parseFloat(document.getElementById('text1').value);
       var savingsLeftAmount = (paycheck - amount); 
          document.getElementById('calculatedSavings').innerHTML = savingsLeftAmount;

}


