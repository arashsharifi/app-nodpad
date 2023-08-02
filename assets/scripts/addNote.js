const sunmitBtn = document.querySelector('#submit');
const form = document.querySelector("form");

const title = document.querySelector('#title');
const textArea = document.querySelector('#text');
// console.log(title);
// console.log(textArea);

const category = document.querySelector("select");
// console.log(category)

// console.log(sunmitBtn);

eventListener();

function eventListener() {
    sunmitBtn.addEventListener("click", handelSubmit)
    document.addEventListener('DOMContentLoaded', forEdit)
}

function handelSubmit(e) {
    e.preventDefault()
    const note = Object.fromEntries(new FormData(form).entries())
    if (forEdit()) {

        myedite(note)
        //         form.reset()
        //         generatost("my note is add mylist",

        //             "linear-gradient(to right,#6ab04c, #badc58)",

        //             2000, () => location.assign("notes.html"))
        //         return
    }
    if (note.title && note.text) {

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

function myedite(note) {
    console.log(note)
    // const iditId = forEdit()
    // const notList = JSON.parse(localStorage.getItem('noteList'))
    // notList.forEach((item) => {
    //     if (item.id === iditId) {
    //         item.title = note.title;
    //         item.text = note.text;

    //     }
    // });
    // localStorage.removeItem("editObject");
    // localStorage.setItem('noteList', JSON.stringify(notList))
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



function forEdit() {
    const getfromLs = JSON.parse(localStorage.getItem('noteList'))
    console.log(getfromLs)

    const toEditLS = JSON.parse(localStorage.getItem('editObject'))
    console.log(toEditLS)

    // getfromLs.forEach(element => {
    //     if (element.id == toEditLS) {
    //         title.value = `${element.title}`
    //         textArea.value = `${element.text}`

    //     }

    // });

    return toEditLS
}









































// let toeditArr = []
// toeditArr.push(toEditLS)

// let acuId = []
// getfromLs.forEach(element => {
//     acuId.push(element.id)
// });

// console.log(toeditArr)
// console.log(acuId)
// let fundMach = false
// for (let i = 0; i < acuId.length; i++) {
//     if (toeditArr.includes(acuId[i])) {
//         fundMach = true
//         break;
//     }

// }
// if (fundMach) {
//     console.log('yes')
// } else {
//     console.log('no')
// }