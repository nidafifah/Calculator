//menampikan angka yang dirubah pada layar/ perbarui layar saat tombol ditekan
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value =number
}

//perintah untuk menampilkan angka-angka yang ditekan
const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
  number.addEventListener("click", (event) =>{
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

//pemberian variable untk setiap operasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//agar angka yang diimputkan bisa lebih dari 1 digit
const inputNumber = (number) =>{
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}

//menambahkan click event ke operator tombol
const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
  operator.addEventListener("click", (event) =>{
    inputOperator(event.target.value)
  })
})

// Mendefinisikan  fuction inputOperator
const inputOperator = (operator) => {
  if (calculationOperator === ''){
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = '0'
}

// menambahkan event click saat tombol = ditekan
//dan
// menjalankan function calculate saat tombol samadengan (+) di click, dan perbarui layarnya

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

//mendefinisikan function calculation
const calculate = () => {
  let result = ''
  switch(calculationOperator){
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
    case '-':
      result = prevNumber - currentNumber
        break
    case '*':
      result = prevNumber * currentNumber
        break
    case '/':
      result = prevNumber / currentNumber
        break
      default:
        return
  }
  currentNumber = result
  calculationOperator =''
}

// Ambil element button dan tambahkan click event
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () =>{
  clearAll()
  updateScreen(currentNumber)
})

//definisikan  tombol AC
const clearAll = () =>{
  prevNumber= ''
  calculationOperator= ''
  currentNumber= '0'
}

// mengkalkulasi angka decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

//mendefinisikan function input decimal
inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

// definisi percentage
inputPercentage = (percentage) => {
  if (currentNumber.includes('%')){
    return
  }
  currentNumber = currentNumber/100
}

// mengkalulasi percentage
const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', (event) =>{
  inputPercentage(event.target.value)
  updateScreen(currentNumber)
})