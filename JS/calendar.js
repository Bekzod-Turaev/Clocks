
const hoursEl = document.getElementById("hour")
const minutsEl = document.getElementById("minuts")
const secondsEl = document.getElementById("seconds")

const clock = () => {
    const date = new Date()

    const hours = date.getHours()
    const minuts = date.getMinutes()
    const seconds = date.getSeconds()

    hoursEl.textContent = hours
    minutsEl.textContent = minuts
    secondsEl.textContent = seconds
}

setInterval(clock, 1000)












