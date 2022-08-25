//Getting the elements
//Operands
let operation = '';
let counter = 0;
let on = false;
//Screen
const screen = document.getElementById('screen');
let signScreen = document.getElementById('sign-screen');
//Spans
const holderSpan = document.getElementById('holder');
const signSpan = document.getElementById('sign');
//BUTTONS
//Numbers
const numbers = document.querySelectorAll('.numbers');
//Decimal
const decimalBtn = document.getElementById('decimal');
//Signs
const signs = document.querySelectorAll('.signs');
//Eraser
const eraserBtn = document.getElementById('eraser');
//Clear
const clear = document.getElementById('clear');
//Equals
const equals = document.getElementById('equals');
//ON-OFF
const onOff = document.getElementById('on-off');

//Working the numbers
numbers.forEach(num => {
    num.addEventListener('click', () => appendDigit(num.textContent));
});

//Working the signs
signs.forEach(sign => {
    sign.addEventListener('click', () => {
        if (onOff.textContent === 'OFF') {
            signSpan.textContent = sign.textContent;
            operation = signSpan.textContent;
            console.log(operation);
            holdNumber();
        } else return
    }); 
})

clear.addEventListener('click', clearFunction);
eraserBtn.addEventListener('click', erase);
onOff.addEventListener('click', OnOFF);
decimalBtn.addEventListener('click', setDecimal);
equals.addEventListener('click', console.log(operation));

//Functions
//Appending the numbers
function appendDigit(digit) {
    counter++
    if (screen.textContent === '') return
    if (counter < 14 && screen.textContent === '0') {
        screen.textContent = digit;
    } else if (counter < 14 && screen.textContent != '0') {
        screen.textContent += digit;
    }
}

//Holding number
function holdNumber() {
    holderOperand = screen.textContent;
    holderSpan.textContent = holderOperand;
    screen.textContent = '0';
    counter = 0;
}

//Clear function
function clearFunction() {
    if (screen.textContent != '') {
        holderOperand = '';
        holderSpan.textContent = '';
        screen.textContent = '0';
        signSpan.textContent = '';
        counter = 0;
    } else return
}

//Erase function
function erase() {
    screen.textContent = screen.textContent.slice(0, -1);
    counter--;
    if (counter <= 1) screen.textContent = '0';
}

//ON-OFF 
function OnOFF() {
    if (on === false) {
        on = true;
        screen.textContent = '0';
        onOff.textContent = 'OFF';
        onOff.style.backgroundColor = 'pink'
    } else {
        on = false;
        screen.textContent = '';
        onOff.textContent = 'ON';
        onOff.style.backgroundColor = '#71fa7d'
        signSpan.textContent = '';
        holderSpan.textContent = '';
    }
}

//Set Decimal
function setDecimal() {
    if (screen.textContent.includes('.') || screen.textContent === '') return
    if (!screen.textContent.includes('.')) screen.textContent += '.';
}

