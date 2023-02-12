let totalDeposit = 0;
let withdrawTotal = 0;


document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-value');
    const depositAmount = parseInt(depositField.value);
    
    totalDeposit = depositAmount + totalDeposit;
    const depositTotalDisplay = document.getElementById('deposit-display');
    depositTotalDisplay.innerText = totalDeposit;
    depositField.value = '';
    
    const balanceDisplay = document.getElementById('currentBalance');
    const balanceNum = parseInt(balanceDisplay.innerText);
    balanceDisplay.innerText = balanceNum + depositAmount;

})

// widraw

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-value');
    const withdrawAmount = parseInt(withdrawField.value);
    
    withdrawTotal = withdrawAmount + withdrawTotal;
    const depositTotalDisplay = document.getElementById('withdraw-display');
    depositTotalDisplay.innerText = withdrawTotal;
    withdrawField.value = '';
    const balanceDisplay = document.getElementById('currentBalance');
    const balanceNum = parseInt(balanceDisplay.innerText);
    balanceDisplay.innerText = balanceNum - withdrawAmount ;


})