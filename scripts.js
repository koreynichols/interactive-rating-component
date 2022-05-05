let start = document.getElementById("start");
let thankyou = document.getElementById("thankyou");

document.querySelector('input').addEventListener('click', test)

function test() {
    start.classList.add('hidden')
    thankyou.classList.remove('hidden')
}