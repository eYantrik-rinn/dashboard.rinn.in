<script>
function calculateLoanTenure(principal, annualInterestRate, monthlyInstallment) {
    // Convert annual interest rate to monthly and calculate monthly interest rate
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    // Calculate loan tenure in months
    const n = -Math.log(1 - (principal * monthlyInterestRate) / monthlyInstallment) / Math.log(1 + monthlyInterestRate);

    // Convert the result to integer months
    const loanTenureMonths = Math.round(n);
   console.log(`The loan tenure is approximately loanTenureMonths months.`,JSON.stringify(loanTenureMonths));
}

// Example usage
let principalAmount = 0;
let annualInterestRate = 0 ;
let monthlyInstallment = 0 ;

$:console.log(calculateLoanTenure(100000,30,8000));



</script>
<input type="number" bind:value={principalAmount}>
<input type="number" bind:value={annualInterestRate}>
<input type="number" bind:value={monthlyInstallment}>
<button type="button" on:click={calculateLoanTenure}>click me</button>