import { clearTimer } from "./countdownTimer.js"
import { contexts } from "./contexts.js"

const html = document.querySelector("html")
const cardImg = document.querySelector(".app__image")
const cardText = document.querySelector(".app__title")
const timerDiv = document.getElementById("timer")

function updateUI(buttonAttribuute) {

    const currentContext = contexts.find((context) => context.type === buttonAttribuute)

    if (currentContext) {
        html.setAttribute("data-contexto", currentContext.attribute)
        cardImg.src = currentContext.img
        cardText.innerHTML = currentContext.text
        resetTimerUI()
        clearTimer()
    }

}

const getCurrentContext = () => {
    return html.getAttribute("data-contexto")
}

const resetTimerUI = () => {
    const currentContext = getCurrentContext()
    const contextData = contexts.find((context) => context.type === currentContext)

    if (contextData) {
        const [minutes, seconds] = contextData.timer
        timerDiv.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
    }
}

export { updateUI, getCurrentContext, resetTimerUI }

