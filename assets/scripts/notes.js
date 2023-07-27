const noNotes = document.querySelector('.no-notes');
const cardContainer = document.querySelector('.cards');
const tags = document.querySelectorAll('.tags span');
console.log(tags)

let tag = "#all"


// console.log(noNotes);
// console.log(cardContainer);

eventListener();

function eventListener() {
    document.addEventListener('DOMContentLoaded', bildCard)
    cardContainer.addEventListener('click', removeClidElement)

    tags.forEach(tag => tag.addEventListener('click', changeTge));


}

function bildCard() {
    const hasLocalStorage = localStorage.getItem('noteList')
    if (hasLocalStorage == null || hasLocalStorage == "[]") {
        noNotes.style.display = "block"
    } else {
        noNotes.style.display = "none"
        const notes = hasLocalStorage ? JSON.parse(localStorage.getItem('noteList')) : []

        const notesOfTag = notes.filter((note) => note.category == tag)

        // console.log(notes)
        if (notesOfTag.length > 0) {
            generatNote(notesOfTag)
        }
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
             <div>
              
              <a href="./add.html" onclick="editNote(${note.id})"><i class="bi bi-pen-fill"></i></a>
             <i class="bi bi-backspace-fill" onclick="deletNote(${note.id})"></i>
             </div>

         </h6>
        <div>
          <div>
        ${note.text}
        </div> 
        `
        // console.log(card)
        cardContainer.appendChild(card)
    });
}

function deletNote(id) {
    const getfromLS = JSON.parse(localStorage.getItem('noteList'));
    console.log(getfromLS)
    const updateNote = getfromLS.filter(notelist => notelist.id !== id)
    localStorage.setItem('noteList', JSON.stringify(updateNote))

}

function removeClidElement(e) {
    console.log(e.target.classList)
    if (e.target.classList.contains('bi')) {
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
    } else {
        console.log('no')
    }
}

function changeTge() {
    tags.forEach(tag => tag.classList = '');

    this.classList = "active"

    tag = this.innerHTML

    bildCard()
}