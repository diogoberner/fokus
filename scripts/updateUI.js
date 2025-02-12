export default function updateUI(buttonAttribuute) {
    const html = document.querySelector("html")
    const cardImg = document.querySelector(".app__image")
    const cardText = document.querySelector(".app__title")
    const timerDiv = document.getElementById("timer")

    const contexts = [
        {
            type: "foco",
            attribute: "foco",
            img: "/imagens/foco.png",
            text: `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`,
            timer: 25
        },
        {
            type: "short",
            attribute: "descanso-curto",
            img: "/imagens/descanso-curto.png",
            text: `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`,
            timer: 5
        },
        {
            type: "long",
            attribute: "descanso-longo",
            img: "/imagens/descanso-longo.png",
            text: `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`,
            timer: 15
        }
    ]

    const currentContext = contexts.find((context) => context.type === buttonAttribuute)

    if (currentContext) {
        html.setAttribute("data-contexto", currentContext.attribute)
        cardImg.src = currentContext.img
        cardText.innerHTML = currentContext.text
        timerDiv.textContent = `${currentContext.timer < 10 ? "0" + currentContext.timer : currentContext.timer}:00`
    }

}

