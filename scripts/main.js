const cardList = document.querySelector(".app__card-list")

cardList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("app__card-button")) {
        return
    }

    const currentButton = e.target
    if (!currentButton) return
    const buttonAttribute = currentButton.getAttribute("data-contexto")

    const activeButton = document.querySelector("app__card-button.active")

    if (activeButton && activeButton !== currentButton) {
        activeButton.classList.remove("active")
        updateUI(buttonAttribute)
    }

    currentButton.classList.add("active")

})