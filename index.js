let home_pts = document.getElementById("home_pts")
let guest_pts = document.getElementById("guest_pts")
let homescore = 0
let guestscore = 0

function plusOnePtH() {
    homescore += 1
    home_pts.textContent = homescore
}
function plusTwoPtsH() {
    homescore += 2
    home_pts.textContent = homescore
}
function plusThreePtsH() {
    homescore += 3
    home_pts.textContent = homescore
}
function plusOnePtG() {
    guestscore += 1
    guest_pts.textContent = guestscore
}
function plusTwoPtsG() {
    guestscore += 2
    guest_pts.textContent = guestscore
}
function plusThreePtsG() {
    guestscore += 3
    guest_pts.textContent = guestscore
}
function newGame() {
    homescore = 0
    guestscore = 0
    home_pts.textContent = homescore
    guest_pts.textContent = guestscore
    document.getElementById("guest-score").style.border = "1px solid black"
    document.getElementById("home-score").style.border = "1px solid black"
}
function clicks() {
if (homescore > guestscore) {
    document.getElementById("home-score").style.border = "2px solid red"
    document.getElementById("guest-score").style.border = "1px solid black"
}
else if (homescore < guestscore) {
    document.getElementById("guest-score").style.border = "2px solid red"
    document.getElementById("home-score").style.border = "1px solid black"
}
else {
    document.getElementById("guest-score").style.border = "1px solid black"
    document.getElementById("home-score").style.border = "1px solid black"
}
}