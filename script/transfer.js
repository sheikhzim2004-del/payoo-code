document.getElementById('transfer-btn').addEventListener('click', function(){
    //1.get user acc number and check this number
    const userAccNumber = getValueFromInput('transfer-number');
    console.log(userAccNumber);
    if(userAccNumber.length !== 11){
        alert('Invalid Number');
        return;
    };


    //2.get amount
    const transferAmount = getValueFromInput('transfer-amount');
    console.log(transferAmount);

    //3. get the current number validate, convert to number
    const currentBalance = getBalance('balance');
    console.log(currentBalance);

    //4. calculate new balence
    const newBalance = Number(currentBalance) - Number(transferAmount);
    console.log(newBalance);


    //5.get pin number and check 
    const pin = getValueFromInput('transfer-pin');
    if(pin !== '1234'){
        alert('Invalid Pin Number');
    }
    else{
        alert('Money Transfer Successfull');
        setBalance(newBalance);


        //transiction system
        //1, call history
        const history = document.getElementById('history-container');

        //2, creat a div
        const newDiv = document.createElement('div');

        //3, write innerHtml
        newDiv.innerHTML = `
        <div class="history-card bg-base-100 p-4 rounded-sm">
            Money Transfer Successfully to ${userAccNumber}, at ${new Date()};
            </div>
        `
         //4, append
        history.append(newDiv);

    }
    console.log(pin);
    
});