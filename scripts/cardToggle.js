import updateUI from "./updateUI.js";

export function cardToggle(listSelector, buttonSelector) {
    const appCardList = document.querySelector(listSelector)

    if (!appCardList) return

    appCardList.addEventListener("click", (e) => {
        const currentButton = e.target.closest(buttonSelector)
        if (!currentButton) return
        const buttonAttribute = currentButton.getAttribute("data-contexto")

        const activeButton = document.querySelector(`${buttonSelector}.active`)

        if (activeButton && activeButton !== currentButton) {
            activeButton.classList.remove("active")
            updateUI(buttonAttribute)
        }

        currentButton.classList.add("active")

    });
}

