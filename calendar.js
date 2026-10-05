// const hours = document.getElementById("hour")
// const minuts = document.getElementById("minuts")
// const seconds = document.getElementById("seconds")
// const miliseconds = document.getElementById("miliseconds")

// const clock = () =>{
//     const date = new Date()
//     const hours = date.getHours()
//     const minuts = date.getMinutes()
//     const seconds = date.getSeconds()
//     const miliseconds = date.getMilliseconds()

//     hours.textContent = hours
//     minuts.textContent = minuts
//     seconds.textContent = seconds
//     miliseconds.textContent = miliseconds
// }

// setInterval(clock, 1000)



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












