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

const toggleMusicInput = document.getElementById("alternar-musica")
const relaxingMusic = new Audio("./sons/luna-rise-part-one.mp3")
relaxingMusic.loop = true

toggleMusicInput.addEventListener("change", () => {
    if (toggleMusicInput.checked) {
        relaxingMusic.play()
        return
    }

    if (!toggleMusicInput.checked) {
        relaxingMusic.pause()
        return
    }
})

