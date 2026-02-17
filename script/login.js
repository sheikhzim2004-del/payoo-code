console.log('login js connect successfully');


document.getElementById('btn-login').addEventListener('click', function(){
    //01. get mobile number
    const inputNumber = document.getElementById('input-number');
    const number = inputNumber.value;
    console.log(number);

    //02. get pin number
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);

    //03. match number and pin
    if(number=='01957388915' && pin=='1234'){
        alert('login successfully');
        window.location.assign('./home.html')
    }
    else{
        alert('login faild');
    }
    //04. true alart .. homepage
    //05. flase alart .. return
})