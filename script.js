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
    } else if (operator == `subtract`) {
        return subtract(firstNum,lastNum)
    } else if (operator == `multiply`) {
        return multiply(firstNum, lastNum) 
    } else if (operator == `divide`) {
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


operatorButton.forEach(function(button) {
    button.addEventListener('click', function() {
        operator = button.textContent
        console.log(`operator up date ${operator}`)
        console.log(`-----`)
        result.textContent = ''
    })
})



digitButton.forEach(function(button) {
    button.addEventListener('click', function() {
        if (operator == 0 ) {
            firstNum = parseInt(result.textContent += button.textContent)
            console.log(`in first`)
            console.log(`first num: ${firstNum}`)
            console.log(operator)
            console.log(`-----`)
        } else {
            lastNum = parseInt(result.textContent += button.textContent)
            console.log(`in last`)
            console.log(`last num: ${lastNum}`)
            console.log(operator)
            console.log(`-----`)
        }
    })  
})

equalButton.addEventListener('click', function() {
    let equal = operation(firstNum, lastNum, operator)
    result.textContent = equal
})

