let start = document.getElementById("start");
let thankyou = document.getElementById("thankyou");
let ratings = document.querySelectorAll(".ratingValue");
let thankyouNote = document.querySelector(".thankyouSelection");
let rating = 0;

document.querySelector('input').addEventListener('click', test)

ratings.forEach(function(e){
    e.addEventListener('click', setRating);
})

function test() {
    start.classList.add('hidden')
    thankyou.classList.remove('hidden')
    let text = thankyouNote.innerText.substring(0, 17) + rating + thankyouNote.innerText.substring(16);
    thankyouNote.innerText = text
}

function setRating(e) {
    ratings.forEach(r => r.classList.remove('selectedRating'))
    this.classList.add('selectedRating');
    rating = this.innerText
}