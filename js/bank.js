
//handling deposit event

document.getElementById("deposit-button").addEventListener("click", function(){

    //deposit input field
    const depositInput = document.getElementById("deposit-amount");
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText)

    // deposit total
    const depositTotalCurrent = document.getElementById("deposit-total");
    const depositTotalNumber = parseFloat(depositTotalCurrent.innerText);
    const depositTotal = depositTotalNumber + depositAmount;
    depositTotalCurrent.innerText = depositTotal;

    // clear input
    depositInput.value = ""

    // balance
    const balancTotalCurrent = document.getElementById("balance-total");
    const balancTotalCurrentText = balancTotalCurrent.innerText;
    const balanceTotal = parseFloat(balancTotalCurrentText);
    const balanceUpdated = balanceTotal + depositAmount;
    balancTotalCurrent.innerText = balanceUpdated;

})

//handling withdraw event
document.getElementById("withdraw-button").addEventListener("click", function(){
    // withdraw field
    const withdrawInput = document.getElementById("withdraw-amount");
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText)
   

    // withdraw total
    const withdrawTotalCurrent = document.getElementById("withdraw-total");
    const withdrawTotalNumber = parseFloat(withdrawTotalCurrent.innerText);
    const withdrawTotal = withdrawTotalNumber + withdrawAmount;
    withdrawTotalCurrent.innerText = withdrawTotal;

    // clear input
    withdrawInput.value = ""


    // balance
    const balancTotalCurrent = document.getElementById("balance-total");
    const balancTotalCurrentText = balancTotalCurrent.innerText;
    const balanceTotal = parseFloat(balancTotalCurrentText);

    const balanceUpdated = balanceTotal - withdrawAmount;
    balancTotalCurrent.innerText = balanceUpdated;
})