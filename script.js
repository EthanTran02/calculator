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
    if (operator == `add`) {
        return console.log(add(firstNum, lastNum))
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



operatorButton.forEach(function(button) {
    button.addEventListener('click', function() {
        operator = button.textContent
        console.log(`operator up date ${operator}`)
        console.log(`-----`)
    })
})

if (operator === 0) {
    digitButton.forEach(function(button) {
        button.addEventListener('click', function() {
            firstNum = result.textContent += button.textContent
            console.log(`in first`)
            console.log(`first num: ${firstNum}`)
            console.log(operator)
            console.log(`-----`)
        })  
    })
} else {
    digitButton.forEach(function(button) {
        button.addEventListener('click', function() {
            lastNum = result.textContent += button.textContent
            console.log(`in last`)
            console.log(`first num: ${lastNum}`)
            console.log(operator)
            console.log(`------`)
        })  
    })
}