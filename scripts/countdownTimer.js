export default function countdownTimer(time, div) {
    const endTime = Date.now() + time * 60 * 1000
    div.innerHTML = ""

    const interval = setInterval(() => {
        let diff = endTime - Date.now()
        let minutes = Math.floor(diff / (1000 * 60))
        let seconds = Math.floor((diff % (1000 * 60)) / 1000)

        // Se o tempo acabar, parar o timer
        if (diff <= 0) {
            clearInterval(interval)
            div.innerHTML = "00:00"
            return
        }

        div.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }, 1000)
}
