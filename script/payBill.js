document.getElementById('bill-btn').addEventListener('click', function(){
    //get pay bill and work success
    const payBillSelect = getValueFromInput('pay-bill-select');
    if(payBillSelect === 'Select A Pay Bill'){
        alert('Please Select a Bill Source')
    }
    console.log(payBillSelect);

    //get biller number
    const billNumber = getValueFromInput('bill-number');
    if(billNumber.length > 16 || billNumber.length < 11){
        alert('Please type a correct biller number');
        return;
    }
    console.log('bill numbr', billNumber);

    //get bill amount
    const billAmount = getValueFromInput('bill-amount');

    const newBalance = getBalance() - Number(billAmount);
    console.log(newBalance);

    //check pin and add money succeessfull
    const billPin = getValueFromInput('bill-pin');
    if(billPin === '1234'){
        alert(`Bill Pay Successfully from ${payBillSelect}
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
            Pay Bill Successfully from ${payBillSelect}, account No ${billNumber} at ${new Date()};
            </div>
        `
        //4, append
        history.append(newDiv);
    }
    else{
        alert('Invalid Pin');

    }
    console.log('pay bill pin no', billPin);
})