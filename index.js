document.addEventListener('click', function(event) {
  const targetId = '#call-to-action'

  if (!event.target.matches(targetId))
    return

  runFeature()
})

const runFeature = function() {
  const inputValue = readInput()

  const result = calculate(inputValue)

  printResult(result)
}

const readInput = function() {
  return document.querySelector('#input_1').value
}

const printResult = function(result) {
  document.querySelector('#output_1').innerHTML = result
}

const calculate = function(inputValue) {
  const numericInput = Number(inputValue)

  if (isEven(numericInput))
    return numericInput + 3
  else
    return numericInput * 2
}

const isEven = function(value) {
  return value % 2 == 0
}
