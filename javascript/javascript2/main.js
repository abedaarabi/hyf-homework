const count1 = document.querySelector('#count-1')
const count2 = document.querySelector('#count-2')
const button = document.querySelector('button')
const input = document.querySelector('input')

let started = false

let score1 = 0
let score2 = 0

button.addEventListener('click', () => {
    if (input.value == '') return
    started = true
    setTimeout(() => {
        if (score1 > score2) alert('the winner is player 1')
        else if (score2 > score1) alert('the winner is player 2')
        else alert('both losers')
        console.log('end')
    }, 1000 * input.value);
})

window.addEventListener('keypress', (e) => {
    if (!started) return;
    const key = e.key
    if (key === 's') {
        score1 += 1
        count1.textContent = score1
    } 
    if (key === 'l') {
        score2 += 1
        count2.textContent = score2
    } 
})
