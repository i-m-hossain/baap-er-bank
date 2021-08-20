

function getInputValue(inputId){

    //deposit input field
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    const amountValue = parseFloat(inputAmountText);
    
    // clear input
    input.value = "";
    return amountValue;
}
function updateTotalField(totalFieldId, amount){
    // deposit total
    const currentTotal = document.getElementById(total);
    const currentTotalValue = parseFloat(currentTotal.innerText);
    const updatedTotal = currentTotalValue + amount;
    currentTotal.innerText = updatedTotal;
}

//handling deposit event

document.getElementById("deposit-button").addEventListener("click", function(){
    // getting deposit amount value
    const depositAmount = getInputValue("deposit-input");
    // get and update deposit total
    updateTotalField("deposit-total", depositAmount)
  
    // balance
    const balancTotalCurrent = document.getElementById("balance-total");
    const balancTotalCurrentText = balancTotalCurrent.innerText;
    const balanceTotal = parseFloat(balancTotalCurrentText);
    const balanceUpdated = balanceTotal + depositAmount;
    balancTotalCurrent.innerText = balanceUpdated;

})

//handling withdraw event
document.getElementById("withdraw-button").addEventListener("click", function(){
    // getting withdraw amount value
    const withdrawAmount = getInputValue("withdraw-input");
    // get and update withdraw total
    updateTotalField("withdraw-total", withdrawAmount)



    // balance
    const balancTotalCurrent = document.getElementById("balance-total");
    const balancTotalCurrentText = balancTotalCurrent.innerText;
    const balanceTotal = parseFloat(balancTotalCurrentText);

    const balanceUpdated = balanceTotal - withdrawAmount;
    balancTotalCurrent.innerText = balanceUpdated;
})