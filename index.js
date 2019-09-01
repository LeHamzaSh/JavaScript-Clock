setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const dateToday = new Date();
    const seconds = dateToday.getSeconds() / 60
    const minutes = (seconds + dateToday.getMinutes()) / 60
    const hours = (minutes + dateToday.getHours()) / 12
}

