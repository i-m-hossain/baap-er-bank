

function getInputValue(inputField){

    //deposit input field
    const input = document.getElementById(inputField);
    const amountText = input.value;
    const amount = parseFloat(amountText);
    
    // clear input
    input.value = "";
    return amount;
}

//handling deposit event

document.getElementById("deposit-button").addEventListener("click", function(){


    const depositAmount = getInputValue("deposit-input");

    // deposit total
    const depositTotalCurrent = document.getElementById("deposit-total");
    const depositTotalNumber = parseFloat(depositTotalCurrent.innerText);
    const depositTotal = depositTotalNumber + depositAmount;
    depositTotalCurrent.innerText = depositTotal;

    

    // balance
    const balancTotalCurrent = document.getElementById("balance-total");
    const balancTotalCurrentText = balancTotalCurrent.innerText;
    const balanceTotal = parseFloat(balancTotalCurrentText);
    const balanceUpdated = balanceTotal + depositAmount;
    balancTotalCurrent.innerText = balanceUpdated;

})

//handling withdraw event
document.getElementById("withdraw-button").addEventListener("click", function(){
    
    const withdrawAmount = getInputValue("withdraw-input");

    // withdraw total
    const withdrawTotalCurrent = document.getElementById("withdraw-total");
    const withdrawTotalNumber = parseFloat(withdrawTotalCurrent.innerText);
    const withdrawTotal = withdrawTotalNumber + withdrawAmount;
    withdrawTotalCurrent.innerText = withdrawTotal;



    // balance
    const balancTotalCurrent = document.getElementById("balance-total");
    const balancTotalCurrentText = balancTotalCurrent.innerText;
    const balanceTotal = parseFloat(balancTotalCurrentText);

    const balanceUpdated = balanceTotal - withdrawAmount;
    balancTotalCurrent.innerText = balanceUpdated;
})