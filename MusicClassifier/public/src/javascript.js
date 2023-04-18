document.addEventListener("DOMContentLoaded", function() {
    console.log("script linked")
    document.querySelector('.btn').addEventListener('click', () => startTimer(document.querySelector('.timer')))
})

timerStatus = true
function startTimer(element) {
    //inistialise
    let timer = 0
    element.style.display = 'block'
    element.innerHTML = timer

    //Trigger recognizer
    init()

    //Timing
    setInterval(() => {
        timer += 1
        console.log(timer)
        element.innerHTML = timer
    }, 1000)
}