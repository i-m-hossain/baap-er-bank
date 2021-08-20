
function getInputValue(inputId){
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input
    input.value = "";
    return amountValue;
}
function updateTotalField(totalFieldId, amount){
    const currentTotal = document.getElementById(totalFieldId);
    const currentTotalValue = parseFloat(currentTotal.innerText);
    const updatedTotal = currentTotalValue + amount;
    currentTotal.innerText = updatedTotal;
}
function currentBalance(){
    const currentTotal = document.getElementById("balance-total");
    const currentTotalValue = parseFloat(currentTotal.innerText);
    return currentTotalValue;
}
function updateBalance(amount, isAdd){
    const currentTotal = document.getElementById("balance-total");
    const currentTotalValue =  currentBalance();

    if(isAdd){
        const updatedTotal = currentTotalValue + amount;
        currentTotal.innerText = updatedTotal;
    }else{
        const updatedTotal = currentTotalValue - amount;
        currentTotal.innerText = updatedTotal;
    }     
}

//handling deposit event

document.getElementById("deposit-button").addEventListener("click", function(){
    // getting deposit amount value
    const depositAmount = getInputValue("deposit-input");
   
    if(depositAmount > 0){
         // get and update deposit total
         updateTotalField("deposit-total", depositAmount)  
        // update balance
        updateBalance(depositAmount, true)
    }
   
})

//handling withdraw event
document.getElementById("withdraw-button").addEventListener("click", function(){
    // getting withdraw amount value
    const withdrawAmount = getInputValue("withdraw-input");
    const currentTotalBalance = currentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentTotalBalance){
            // get and update withdraw total
            updateTotalField("withdraw-total", withdrawAmount)
            // balance
            updateBalance(withdrawAmount, false) 
    }  
})