const noNotes = document.querySelector('.no-notes');
const cardContainer = document.querySelector('.cards');


console.log(noNotes);
console.log(cardContainer);

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', bildCard)
    // cardContainer.addEventListener('click', removeClidElement)
}

function bildCard() {
    const hasLocalStorage = localStorage.getItem('noteList')
    noNotes.style.display = hasLocalStorage ? "none" : "block"

    const notes = hasLocalStorage ?
        JSON.parse(localStorage.getItem('noteList')) : []

    // console.log(notes)
    if (notes.length > 0) {
        generatNote(notes)
    }
}

function generatNote(arrayNotes) {

    arrayNotes.forEach(note => {
        // console.log(note)
        const card = document.createElement('div')
        card.classList = "card"
        card.innerHTML = `
        <div class="card info-card" >
        <h6 class="cart-title">
        ${note.title}
            <i class="bi bi-backspace-fill"></i>
            </h6>
        <div>
        ${note.text}
        </div> 
        `
        console.log(card)
        cardContainer.appendChild(card)
    });
}

// function removeClidElement(e) {
//     console.log(e.target.classList)
//     if (e.target.classList.contains('bi')) {
//         e.target.parentElement.parentElement.parentElement.remove()
//     } else {
//         console.log('no')
//     }
// }