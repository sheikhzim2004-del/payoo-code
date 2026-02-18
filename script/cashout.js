document.getElementById('cashout-btn').addEventListener('click', function(){

    //1. get the agent number and validity
    const cashoutNumber = getValueFromInput('cashout-number');
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert('Agent Number is Invalid');
        return;
    }

    //2. get the amount validate, convert to number
    const cashoutAmount = getValueFromInput('cashout-amount');
    console.log(cashoutAmount);

    //3. get the current number validate, convert to number
    const balance = getBalance('balnce');
    console.log(balance);

    //4. calculate new balence
    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert('You have not sufficient balance')
        return;
    }

    //5. get the pin and verify
    const cashoutPin = getValueFromInput('cashout-pin');
    if(cashoutPin === '1234'){
        alert('Cashout successfully');
        setBalance(newBalance);

        //transiction system
        //1, call history
        const history = document.getElementById('history-container');

        //2, creat a div
        const newDiv = document.createElement('div');

        //3, write innerHtml
        newDiv.innerHTML = `
        <div class="history-card bg-base-100 p-4 rounded-sm">
            Cash-Out Successfully to ${cashoutNumber}, at ${new Date()};
            </div>
        `
        //4, append
        history.append(newDiv);
    }
    else{
        alert('Invalid Pin')
    }
})





// document.getElementById('cashout-btn').addEventListener('click', function () {
//     //1. get the agent number and validity
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !== 11){
//         alert('Invalid agent number');
//         return;
//     }

//     //2. get the amount validate, convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     //3. get the current number validate, convert to number
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     //4. calculate new balence
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert('You have not sufficience balance');
//         return;
//     }
//     //5. get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const cashoutPin = cashoutPinInput.value;
//     if(cashoutPin === '1234'){
//         //5.1 true:: show an alart > set balence
//         alert('Cash Out Successfully');
//         balanceElement.innerText = newBalance;
//         console.log('new balance :', newBalance);
//     }
//     else{
//         //5.2 false:: show an alart > return
//         alert('Invalid Pin');
//         return;
//     }
    
// })