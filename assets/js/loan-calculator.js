function calculateLoan(loanAmount, annualInterestRate, loanTermMonths) {
  const regex = /[\d.]+/g;
//  avoiding non numeric character
 loanAmount = loanAmount.match(regex)?.join('');
 annualInterestRate = annualInterestRate.match(regex)?.join('');
 loanTermMonths = loanTermMonths.match(regex)?.join('');
//  formating a number
 const formatted_loan_amount = Intl.NumberFormat().format(loanAmount)
 if(formatted_loan_amount == 'NaN'){
  document.getElementById('loan-amount').value = '0'
 }
 else{
  document.getElementById('loan-amount').value = `${formatted_loan_amount} Br`
 }
 

 const formatted_annual_interest_rate = Intl.NumberFormat().format(annualInterestRate)
 if(formatted_annual_interest_rate == 'NaN'){
  document.getElementById('interest-rate').value = '0'
 }
 else{
  document.getElementById('interest-rate').value = `${formatted_annual_interest_rate} %`
 }

const formatted_loan_term_months = Intl.NumberFormat().format(loanTermMonths)

if(formatted_loan_term_months == 'NaN'){
  document.getElementById('loan-term').value = `0`
 }
 else{
  document.getElementById('loan-term').value = formatted_loan_term_months
 }


// Convert annual interest rate to a monthly rate
let monthlyInterestRate = (annualInterestRate / 100) / 12;

// Calculate the monthly payment
let monthlyPayment = loanAmount * monthlyInterestRate / 
  (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));

// Calculate the total payment over the loan term
let totalPayment = monthlyPayment * loanTermMonths;

// Calculate the total interest paid
let totalInterest = totalPayment - loanAmount;
  


  monthlyPayment= monthlyPayment.toFixed(2),
  totalInterest= totalInterest.toFixed(2),
  totalPrincipalAndInterest= totalPayment.toFixed(2)
  let monthly = document.getElementById("monthly_payment")
//  formating monthly payment
const formatted_monthly_payment = Intl.NumberFormat().format(monthlyPayment)
monthly.innerText = `${formatted_monthly_payment} Br`
//  formating totalInterest
   let total_interest = document.getElementById("total_interest")
const formatted_total_interest = Intl.NumberFormat().format(totalInterest)
total_interest.innerText = `${formatted_total_interest} Br`  
// formating totalPrincipalAndInterest
let total_principle = document.getElementById("total_principal")
const formatted_total_principle = Intl.NumberFormat().format(totalPrincipalAndInterest)
total_principle.innerText = `${formatted_total_principle} Br`
}