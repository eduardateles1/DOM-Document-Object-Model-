// @ts-nocheck


document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.getElementById("clear").addEventListener("click", handleClearButton)

input.addEventListener("keydown",handleTyping )

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click",copyToClickboard)

document.getElementById("themeSwitcher").addEventListener("click", themeSwitch)

import { calculate } from "./calculate.js"
import copyToClickboard from "./copyToClickboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
import themeSwitch from "./themeSwitch.js" 
