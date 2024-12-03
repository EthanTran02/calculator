function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}


function operation(firstNum, lastNum, operator) {
    if (operator == `+`) {
        return add(firstNum, lastNum)
    } else if (operator == `-`) {
        return subtract(firstNum,lastNum)
    } else if (operator == `*`) {
        return multiply(firstNum, lastNum) 
    } else if (operator == `/`) {
        return divide(firstNum, lastNum)
    } else {
        return console.log(`please enter a valid operator!`)
    }
}

let firstNum = 0
let lastNum = 0
let operator = 0

let digitButton = document.querySelectorAll('.digit')
let operatorButton = document.querySelectorAll(`.operator`)
let result = document.querySelector('#result')
let equalButton = document.querySelector(`#equal`)
let clearButton = document.querySelector('#clear') 



operatorButton.forEach(function(button) {
    button.addEventListener('click', function() {
        if(operator == 0) {
            operator = button.textContent
        } else {
            let equal = operation(firstNum, lastNum, operator)
            if (Number.isInteger(equal)) {
                result.textContent = equal
            } else {
                result.textContent = equal.toFixed(1)
            }
            firstNum = parseInt(result.textContent)
            lastNum = 0
            operator = button.textContent
        }
        
    })
})

digitButton.forEach(function(button) {
    button.addEventListener('click', function() {
        if (operator == 0) {
            firstNum = parseInt(result.textContent += button.textContent)
        } else {
            if(lastNum == 0) {
                result.textContent = ''
                lastNum = parseInt(result.textContent += button.textContent)
            } else {
                lastNum = parseInt(result.textContent += button.textContent)
            }
    } 
})})

equalButton.addEventListener('click', function() {
    if (firstNum == 0 || lastNum == 0) {
        alert('please enter valid operator!')
    } else {
        let equal = operation(firstNum, lastNum, operator)
        if (Number.isInteger(equal)) {
            result.textContent = equal
        } else {
            result.textContent = equal.toFixed(1)
        }
    }
})

clearButton.addEventListener('click', function() {
    firstNum = 0
    lastNum = 0
    operator = 0
    result.textContent = ''
})