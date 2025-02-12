import { clearTimer } from "./countdownTimer.js"
import { contexts } from "./contexts.js"

export default function updateUI(buttonAttribuute) {
    const html = document.querySelector("html")
    const cardImg = document.querySelector(".app__image")
    const cardText = document.querySelector(".app__title")
    const timerDiv = document.getElementById("timer")

    const currentContext = contexts.find((context) => context.type === buttonAttribuute)

    if (currentContext) {
        html.setAttribute("data-contexto", currentContext.attribute)
        cardImg.src = currentContext.img
        cardText.innerHTML = currentContext.text
        timerDiv.textContent = `${currentContext.timer < 10 ? "0" + currentContext.timer : currentContext.timer}:00`
        clearTimer()
    }

}

