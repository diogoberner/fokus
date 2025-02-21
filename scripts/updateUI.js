import { clearTimer } from "./countdownTimer.js"
import { contexts } from "./contexts.js"

const html = document.querySelector("html")
const cardImg = document.querySelector(".app__image")
const cardText = document.querySelector(".app__title")
const timerDiv = document.getElementById("timer")

export default function updateUI(buttonAttribuute) {

    const currentContext = contexts.find((context) => context.type === buttonAttribuute)

    if (currentContext) {
        html.setAttribute("data-contexto", currentContext.attribute)
        cardImg.src = currentContext.img
        cardText.innerHTML = currentContext.text
        timerDiv.textContent = `${currentContext.timer[0] < 10 ? "0" + currentContext.timer[0] : currentContext.timer[0]}:${currentContext.timer[1] < 10 ? "0" + currentContext.timer[1] : currentContext.timer[1]}`
        clearTimer()
    }

}

export const getCurrentContext = () => {
    return html.getAttribute("data-contexto")
}

