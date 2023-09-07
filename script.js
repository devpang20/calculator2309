class Calculator {

}

// 값 표시
const $previoutPreview = document.querySelector("[data-previous-preview]")
const $currentPreview = document.querySelector("[data-currnet-preview]")

// 사칙연산
const $minus = document.querySelector("[data-btn-minus]")
const $plus = document.querySelector("[data-btn-plus]")
const $multiply = document.querySelector("[data-btn-multiply]")
const $divide = document.querySelector("[data-btn-divide]")

// 숫자 or 연산
const $numbers = document.querySelectorAll("[data-btn-number]")
const $operations = document.querySelectorAll("[data-btn-operation]")

console.log($numbers)
console.log($operations)

$numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
    
})

$operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
    
})

const calculator = new Calculator()