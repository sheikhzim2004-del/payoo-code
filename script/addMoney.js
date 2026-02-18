document.getElementById('add-money-btn').addEventListener('click', function(){
    //get bank select and work success
    const addMoneyBankSelect = getValueFromInput('add-money-bank-select');
    if(addMoneyBankSelect === 'Select a Bank'){
        alert('Please Select a Bank')
    }
    console.log(addMoneyBankSelect);

    //get bank acc number
    const bankAccNumber = getValueFromInput('add-money-number');
    if(bankAccNumber.length > 16 || bankAccNumber.length < 11){
        alert('Please type a correct bank acc number');
        return;
    }
    console.log('bank acc numbr', bankAccNumber);

    //get add amount
    const addAmount = getValueFromInput('add-money-amount');

    const newBalance = getBalance() + Number(addAmount);
    console.log(newBalance);

    //check pin and add money succeessfull
    const addMoneyPin = getValueFromInput('add-money-pin');
    if(addMoneyPin === '1234'){
        alert(`Add Money Successfully from ${addMoneyBankSelect}
             at ${new Date()}`);
        setBalance(newBalance);


        //transiction system
        //1, call history
        const history = document.getElementById('history-container');

        //2, creat a div
        const newDiv = document.createElement('div');

        //3, write innerHtml
        newDiv.innerHTML = `
        <div class="history-card bg-base-100 p-4 rounded-sm">
            Add Money Successfully from ${addMoneyBankSelect}, account No ${bankAccNumber} at ${new Date()};
            </div>
        `
        //4, append
        history.append(newDiv);
    }
    else{
        alert('Invalid Pin');

    }
    console.log('add money pin no', addMoneyPin);
})