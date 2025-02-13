import { clearTimer, resetTimer } from "./countdownTimer.js"
import updateUI from "./updateUI.js"
import { contexts } from "./contexts.js"

export default function toggleContext(cardList, currentButtonRef, currentContextRef) {

    cardList.addEventListener("click", (e) => {
        if (!e.target.classList.contains("app__card-button")) {
            return
        }

        const newButton = e.target
        const buttonAttribute = newButton.getAttribute("data-contexto")

        if (currentContextRef.value === buttonAttribute) return

        currentButtonRef.value.classList.remove("active")
        newButton.classList.add("active")

        currentButtonRef.value = newButton
        currentContextRef.value = buttonAttribute


        updateUI(buttonAttribute)
        const timer = contexts.filter((context) => context.type === buttonAttribute)
        resetTimer()
    })

}