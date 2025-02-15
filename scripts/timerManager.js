import { clearRemainingTime, clearTimer, countdownTimer } from "./countdownTimer.js"

const musicStart = new Audio("/sons/play.wav")
const musicPause = new Audio("/sons/pause.mp3")

const startPauseButton = document.getElementById("start-pause")
const timerDiv = document.getElementById("timer")
let timerText = startPauseButton.querySelector("span")
let timerIcon = startPauseButton.querySelector(".app__card-primary-butto-icon")
let isRunning = false
let isPaused = false

const startTimer = () => {
    timerText.textContent = "Pausar"
    musicStart.play()
    const currentTime = timerDiv.textContent
    const [minutes, seconds] = currentTime.split(":").map(Number)
    countdownTimer(minutes, seconds, timerDiv)
    isRunning = true
    isPaused = false
}

const pauseTimer = () => {
    timerText.textContent = "Continuar"
    musicPause.play()
    clearTimer()
    isPaused = true
    isRunning = false
}

const continueTimer = () => {
    countdownTimer(0, 0, timerDiv)
    timerText.textContent = "Pausar"
    musicStart.play()
    isPaused = false
    isRunning = true
}

const changeTimerIcon = () => {
    if (isRunning === false && isPaused === false) {
        timerIcon.src = "/imagens/play_arrow.png"
    }
    else if (isPaused === false) {
        timerIcon.src = "/imagens/pause.png"
    } else {
        timerIcon.src = "/imagens/play_arrow.png"
    }
}

export const resetTimer = () => {
    clearTimer()
    timerText.textContent = "Começar"
    isPaused = false
    isRunning = false
    clearRemainingTime()
    changeTimerIcon()
}

export default function handleStartPauseContinue() {
    if (isRunning) {
        pauseTimer()
        changeTimerIcon()
        return
    }

    if (isPaused) {
        continueTimer()
        changeTimerIcon()
        return
    }
    startTimer()
    changeTimerIcon()
}