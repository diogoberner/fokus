import { countdownTimer } from "./countdownTimer.js"
import updateUI from "./updateUI.js"

const cardList = document.querySelector(".app__card-list")
let currentButton = document.querySelector(".app__card-button.active")
let currentContext = currentButton.getAttribute("data-contexto")

updateUI(currentContext)

cardList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("app__card-button")) {
        return
    }

    const newButton = e.target
    const buttonAttribute = newButton.getAttribute("data-contexto")

    if (currentContext === buttonAttribute) return

    currentButton.classList.remove("active")
    newButton.classList.add("active")

    currentButton = newButton
    currentContext = buttonAttribute

    updateUI(buttonAttribute)
})

const startPauseButton = document.getElementById("start-pause")
const timerDiv = document.getElementById("timer")

startPauseButton.addEventListener("click", (e) => {
    timerDiv.textContent = ""
    countdownTimer(25, timerDiv)
})

