export default function showTimer(contextElement, div) {
    const context = contextElement.getAttribute("data-contexto");

    const handleClick = () => {
        if (context === "foco") {
            countdownTimer(25, div);
        } else if (context === "descanso-curto") {
            countdownTimer(5, div);
        } else {
            countdownTimer(15, div);
        }
    };

    timerButton.removeEventListener("click", handleClick); // Remove o antigo antes de adicionar
    timerButton.addEventListener("click", handleClick);
}
