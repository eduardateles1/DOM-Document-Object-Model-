import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value
  // @ts-ignore
  input.value += value
}

// @ts-ignore
export function handleClear(ev) {
  // @ts-ignore
  input.value = ""
  // @ts-ignore
  input.focus()
}

export function handleTyping(ev) {
  ev.preventDefault()
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
  if (allowedKeys.includes(ev.key)) {
    // @ts-ignore
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    // @ts-ignore
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
}