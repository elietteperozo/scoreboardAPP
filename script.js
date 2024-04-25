

let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

let countHome = 0
let countGuest = 0

// score home counter

function add1Home() {
    countHome += 1
    scoreHomeEl.textContent = countHome
}

function add2Home() {
    countHome += 2
    scoreHomeEl.textContent = countHome
}

function add3Home() {
    countHome += 3
    scoreHomeEl.textContent = countHome
}

// score guest counter
function add1Guest() {
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}

function add2Guest() {
    countGuest+= 2
    scoreGuestEl.textContent = countGuest
}

function add3Guest() {
    countGuest += 3
    scoreGuestEl.textContent = countGuest
}

function resetAll(){
    countHome = 0
    countGuest = 0
    scoreHomeEl.textContent = countHome
    scoreGuestEl.textContent = countGuest
}

