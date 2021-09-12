var birthDate = document.querySelector('#birth-date');
var luckyNumber = document.querySelector('#lucky-number')
var btnCheck = document.querySelector('#btn-check');

btnCheck.addEventListener('click',getResult);

function getResult(){
    var sumOfDigits=0;
    var birthDateDigitString = birthDate.value.replaceAll('-','');
    console.log(typeof(birthDateDigitString), birthDate.value);
    for(let digit of birthDateDigitString){
        sumOfDigits+=Number(digit);
    }
    result = getSumOfFinalResult(sumOfDigits);
    if(result === Number(luckyNumber.value)){
        console.log('yayyyy');
    }
    else{
        console.log('oopsieee');
    }
    
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