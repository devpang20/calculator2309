class Calculator {
    $previousPreview
    $currentPreview
    // 연산 관련 변수 추가

    constructor($previousPreview, $currentPreview) {
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number) {
        // 이전에 숫자를 입력하지 않고 .을 먼저 입력한 경우
        if (number === '.' && this.$currentPreview.textContent.length < 1) {
            return
        }

        this.$currentPreview.textContent += number
    }

    onPressOperation(operation) {
        // 이전에 숫자를 입력하지 않고 연산 기호를 쓰는 경우
        if (this.$currentPreview.textContent.length < 1) {
            return
        }

        this.$previousPreview.textContent = `${this.$currentPreview.textContent} ${operation}`
        this.$currentPreview.textContent = ''
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
const $equal = document.querySelector("[data-btn-equal]")

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
        switch (operation) {
            case $plus:
             calculator.onPressOperation("+") 
             break
            case $minus:
             calculator.onPressOperation("-") 
             break
            case $multiply: 
             calculator.onPressOperation("×")
             break
            case $divide: 
             calculator.onPressOperation("÷")
             break
            case $equal: 
             calculator.onPressOperation()
             break
            default: 
             break
        }
    })
    
})
