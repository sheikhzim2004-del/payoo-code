//machine id >== input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}


//machine >== get balence
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

//machine > == set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


//machine id hide all and show only one id 
function showOnly(id){
    // console.log('show only click')
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    // console.log(`addmoney: ${addMoney} , cashout: ${cashout}`)

    //shobaike hide koro
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');


    //click kora id kea show koro
    const select = document.getElementById(id);
    select.classList.remove('hidden'); 
};

//machin btn color change
const allBtn = document.querySelectorAll('.btn');
for(const btn of allBtn){
    btn.addEventListener('click', function(){
        for(const b of allBtn){
        //remove
        b.classList.remove('btn-success');
        }
        //add
        this.classList.add('btn-success');
    });
};

// const btn = document.getElementById('btn');
// btn.addEventListener('click', function(){
//     btn.classList.add('btn-success');
// });