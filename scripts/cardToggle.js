export default function cardToggle(listSelector, buttonSelector) {
    const appCardList = document.querySelector(listSelector)

    if (!appCardList) return

    appCardList.addEventListener("click", (e) => {
        const currentButton = e.target.closest(buttonSelector)
        if (!currentButton) return

        const activeButton = document.querySelector(`${buttonSelector}.active`)

        if (activeButton && activeButton !== currentButton) {
            activeButton.classList.remove("active")
        }

        currentButton.classList.add("active")
    });
}
