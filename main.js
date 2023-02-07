let inputa = document.getElementById('inputa')
let guess = document.getElementById('guesse')
let container = document.getElementById('container')
let errorTexta = document.querySelector('.errorsa');
let errorTextb = document.querySelector('.errorsb');
let errorTextc = document.querySelector('.errorsc');


guess.addEventListener('click', () =>{

let numbers = [-1,-2,-3,-4,-5,-6,-7,-8,-9,0,1,2,3,4,5,6,7,8,9]
 let guesseNembers = Math.floor(Math.random()*numbers.length)

    if(inputa.value === ''){
        inputa.style.borderColor = 'blue'
        errorTexta.textContent = "Please enter a number!"
    
}




else if(inputa.value === guesseNembers){
 inputa.style.borderColor = '   green'
 errorTextb.textContent = `${inputa.value} was the correct number. YOU ween`

}
else{
    inputa.style.borderColor = 'red'
    
    errorTextc.textContent = `Game Over. YOU Lose!. ${inputa.value} is not the correct number`

}


})