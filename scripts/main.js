import { countdownTimer, clearTimer } from "./countdownTimer.js"
import toggleContext from "./toggleContext.js"
import updateUI from "./updateUI.js"

const cardList = document.querySelector(".app__card-list")
let currentButton = document.querySelector(".app__card-button.active")
let currentContext = currentButton.getAttribute("data-contexto")
const currentButtonRef = { value: currentButton }
const currentContextRef = { value: currentContext }

updateUI(currentContextRef.value);
toggleContext(cardList, currentButtonRef, currentContextRef)

const startPauseButton = document.getElementById("start-pause")
const timerDiv = document.getElementById("timer")

let isRunning = false
let isPaused = false

startPauseButton.addEventListener("click", () => {

    if (isRunning) {
        startPauseButton.querySelector("span").textContent = "Continuar"
        clearTimer()
        isPaused = true
        isRunning = false
        return
    }

    if (isPaused) {
        countdownTimer(0, 0, timerDiv)
        startPauseButton.querySelector("span").textContent = "Pausar"
        isPaused = false
        isRunning = true
        return
    }

    startPauseButton.querySelector("span").textContent = "Pausar"
    const currentTime = timerDiv.textContent
    const [minutes, seconds] = currentTime.split(":").map(Number)
    countdownTimer(minutes, seconds, timerDiv)
    isRunning = true
    isPaused = false
})

