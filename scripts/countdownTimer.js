import { getCurrentContext } from "./updateUI.js"

const musicEnd = new Audio("/sons/beep.mp3")
let interval
let remainingTime = 0

export function countdownTimer(minutes, seconds, div) {
    clearTimer()

    const endTime = remainingTime
        ? Date.now() + remainingTime
        : Date.now() + (minutes * 60 * 1000) + (seconds * 1000)

    function updateTimer() {
        let diff = endTime - Date.now()
        remainingTime = diff

        let min = Math.floor(diff / (1000 * 60))
        let sec = Math.floor((diff % (1000 * 60)) / 1000)

        // Se o tempo acabar, parar o timer
        if (diff <= 0) {
            clearTimer()
            div.innerHTML = "00:00"
            musicEnd.play()
            const endTimeEvent = new CustomEvent("FokusTimer")
            if (getCurrentContext() === "foco") {
                dispatchEvent(endTimeEvent)
            }
            return
        }
        div.textContent = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
    }

    updateTimer()
    interval = setInterval(updateTimer, 1000)
}

export function clearTimer() {
    clearInterval(interval)
}

export function clearRemainingTime() {
    remainingTime = 0
}
