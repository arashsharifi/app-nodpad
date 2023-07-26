const sunmitBtn = document.querySelector('#submit');
const form = document.querySelector("form");
console.log(sunmitBtn);

eventListener();

function eventListener() {
    sunmitBtn.addEventListener('click', handelSubmit)
}

function handelSubmit(e) {
    e.preventDefault()
    const note = Object.fromEntries(new FormData(form).entries())
    if (note.title && note.text) {
        //add handeling
        // console.log('yes it can submit')
        note.id = Date.now()

        addNewNote(note)

        form.reset()

        generatost("my note is add mylist",

            "linear-gradient(to right,#6ab04c, #badc58)",

            2000, () => location.assign("notes.html"))
    } else {
        generatost('this is no text in hear',
            "linear-gradient(to right, #eb4d4b, #ff7979)",

            3000, () => location.assign("notes.html"))
    }
}

//add function for tost object
function generatost(text, color, duration, callback) {
    Toastify({
        text: text,
        duration: duration,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
        },
        callback: callback

    }).showToast();

}

function addNewNote(getvalueNote) {
    const hasLocalStorage = localStorage.getItem('noteList')

    const notes = hasLocalStorage ? JSON.parse(hasLocalStorage) : []

    notes.push(getvalueNote)

    console.log(notes)

    localStorage.setItem('noteList', JSON.stringify(notes))
}