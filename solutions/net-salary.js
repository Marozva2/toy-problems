// Define tax rates
const taxRates = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: 500000, rate: 0.3 },
    { min: 500001, max: 800000, rate: 0.325 },
    { min: 800001, max: Infinity, rate: 0.35 },
  ];
  
// Define NHIF and NSSF rates
const nhifRate = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 950 },
    { min: 40000, max: 44999, rate: 1000 },
    { min: 45000, max: 49999, rate: 1100 },
    { min: 50000, max: 59999, rate: 1200 },
    { min: 60000, max: 69999, rate: 1300 },
    { min: 70000, max: 79999, rate: 1400 },
    { min: 80000, max: 89999, rate: 1500 },
    { min: 90000, max: 99999, rate: 1600 },
    { min: 100000, max: Infinity, rate: 1700 },
    ]; 

const nssfRate = [
    { min: 0, max: 6000, rate: 0.06 },
    { min: 6001, max: 18000, rate: 0.12 },
  ]
  
// Input values
const basicSalary = parseFloat(prompt("Enter your basic salary:"));
const benefits = parseFloat(prompt("Enter your benefits:"));
  
// Calculate gross salary
const grossSalary = basicSalary + benefits;
  
// Calculate payee (tax)
let payee = 0;
let taxableIncome = grossSalary - nhifRate * grossSalary - nssfRate * grossSalary * 2;
  for (let i = 0; i < taxRates.length; i++) {
    const taxRate = taxRates[i];
    if (taxableIncome > taxRate.min) {
      const taxableAmount = Math.min(taxableIncome - taxRate.min, taxRate.max - taxRate.min);
      payee += taxableAmount * taxRate.rate;
    }
  }
  
// Calculate NHIF and NSSF deductions
const nhifDeductions = Math.min(nhifRate * grossSalary, 1700);
const nssfDeductions = nssfRate * grossSalary * 2;
  
// Calculate net salary
const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
// Output results to the console
console.log("Gross salary:", grossSalary);
console.log("Payee (tax):", payee);
console.log("NHIF deductions:", nhifDeductions);
console.log("NSSF deductions:", nssfDeductions);
console.log("Net salary:", netSalary);
  