var birthDate = document.querySelector('#birth-date');
var luckyNumber = document.querySelector('#lucky-number')
var btnCheck = document.querySelector('#btn-check');
var successMessage = document.querySelector('.success-message')
var error = document.querySelector('.error-message')

btnCheck.addEventListener('click',getResult);

function getResult(){
    if(birthDate.value && luckyNumber.value){
        error.innerHTML=""
        var sumOfDigits=0;
        var birthDateDigitString = birthDate.value.replaceAll('-','');
        for(let digit of birthDateDigitString){
            sumOfDigits+=Number(digit);
        }
        // result = getSumOfFinalResult(sumOfDigits);
        if(sumOfDigits % Number(luckyNumber.value) === 0){
            finalMessage('Yayy! Your birthday is lucky. 🥳')
        }
        else{
            finalMessage('Oops! Your birthday is not lucky. 🙁');
        }   
    }
    else{
        successMessage.innerHTML=""
        errorMessage('Please fill both the fields.🤷🏻‍♀️')
    }
     
}

function finalMessage(message){
    successMessage.innerHTML = message;
}

function errorMessage(message){
    error.innerHTML=message
}

function getSumOfFinalResult(number){
    var sum=0;
    var digit =0;
    while(number>0){
        digit=number%10
        sum+=digit;
        number=Math.trunc(number/10);
    }
    return sum;
}