let interval

export function countdownTimer(time, div) {
    clearTimer()

    const endTime = Date.now() + time * 60 * 1000

    interval = setInterval(() => {
        let diff = endTime - Date.now()
        let minutes = Math.floor(diff / (1000 * 60))
        let seconds = Math.floor((diff % (1000 * 60)) / 1000)

        // Se o tempo acabar, parar o timer
        if (diff <= 0) {
            clearTimer()
            div.innerHTML = "00:00"
            return
        }

        div.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }, 1000)
}

export function clearTimer() {
    clearInterval(interval)
}
