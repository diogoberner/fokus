import handleStartPauseContinue from "./timerManager.js"
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

startPauseButton.addEventListener("click", handleStartPauseContinue)

