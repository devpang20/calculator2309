class Calculator {
    $previousPreview
    $currentPreview

    constructor($previousPreview, $currentPreview) {
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number) {
        console.log(this.$previousPreview.textContent)
        console.log(this.$currentPreview.textContent)
        // TODO: 벨리데이션 처리 
        // if () {}
        this.$currentPreview.textContent += number
    }
}

// 값 표시
const $previousPreview = document.querySelector("[data-previous-preview]")
const $currentPreview = document.querySelector("[data-currnet-preview]")

// 사칙연산
const $minus = document.querySelector("[data-btn-minus]")
const $plus = document.querySelector("[data-btn-plus]")
const $multiply = document.querySelector("[data-btn-multiply]")
const $divide = document.querySelector("[data-btn-divide]")

// 숫자 or 연산
const $numbers = document.querySelectorAll("[data-btn-number]")
const $operations = document.querySelectorAll("[data-btn-operation]")


const calculator = new Calculator($previousPreview, $currentPreview)

// 숫자 처리
$numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        const number = e.target.textContent
        calculator.onPressNumber(number)
    })
    
})

$operations.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        console.log(e.target.textContent)
    })
    
})
