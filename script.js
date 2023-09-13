class Calculator {
    $previousPreview
    $currentPreview
    // 연산 관련 변수 추가
    previousOperation = ""
    currntOperation = ""

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

        this.previousOperation = operation
        this.$previousPreview.textContent = `${this.$currentPreview.textContent} ${operation}`
        this.$currentPreview.textContent = ''
    }

    onEqual() {
        // 연산에 관련된 데이터가 모두 존재하는지
        if (
            this.$currentPreview.textContent.length > 0 &&
            this.$previousPreview.textContent.length > 0 &&
            this.previousOperation.length > 0
        ) {
            let result = 0

            switch (this.previousOperation) {
                case "+":
                    result = this.hadlePlus()
                    break
                case "-":
                    result = this.hadleMinus()
                    break
                case "×":
                    result = this.hadleMultiply()
                    break
                case "÷":
                    result = this.hadleDivide()
                    break
                default:
                    break

            }

            this.$currentPreview.textContent = result.toString()
            this.$previousPreview.textContent = ""
            this.currntOperation = ""
        }
    }


    hadlePlus() {
        return (
            +this.$previousPreview.textContent.split(" ")[0] + 
            +this.$currentPreview.textContent
        )
    }

    hadleMinus() {
        return (
            +this.$previousPreview.textContent.split(" ")[0] - 
            +this.$currentPreview.textContent
        )
    }

    hadleMultiply() {
        return (
            +this.$previousPreview.textContent.split(" ")[0] * 
            +this.$currentPreview.textContent
        )
    }

    hadleDivide() {
        return (
            +this.$previousPreview.textContent.split(" ")[0] / 
            +this.$currentPreview.textContent
        )
    }

    onReset() {
        this.$currentPreview.textContent = ""
        this.$previousPreview.textContent = ""
        this.previousOperation = ""
        this.currntOperation = ""
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

// 리셋, 삭제
const $reset = document.querySelector("[data-btn-reset]")

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
             calculator.onEqual()
             break
            default: 
             break
        }
    })
    
})
$reset.addEventListener("click", (e) => calculator.onReset())