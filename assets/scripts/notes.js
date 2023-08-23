const noNotes = document.querySelector(".no-notes");
const cardContainer = document.querySelector(".cards");
const tags = document.querySelectorAll(".tags span");
const search = document.querySelector("#search");
console.log(tags);

let tag = "#all";

// console.log(noNotes);
// console.log(cardContainer);

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", bildCard);

  cardContainer.addEventListener("click", removeClidElement);

  tags.forEach((tag) => tag.addEventListener("click", changeTge));

  search.addEventListener("input", searchQuery);
}

function bildCard() {
  const hasLocalStorage = localStorage.getItem("noteList");
  if (hasLocalStorage == null || hasLocalStorage == "[]") {
    noNotes.style.display = "block";
  } else {
    noNotes.style.display = "none";
    const notes = hasLocalStorage
      ? JSON.parse(localStorage.getItem("noteList"))
      : [];

    const notesOfTag =
      tag !== "#all" ? notes.filter((note) => note.category == tag) : notes;

    // console.log(notes)
    if (notesOfTag.length > 0) {
      generatNote(notesOfTag);
    }
  }
}

function generatNote(arrayNotes) {
  cardContainer.innerHTML = "";
  arrayNotes.forEach((note) => {
    // console.log(note)
    const card = document.createElement("div");
    card.classList = "card";
    card.innerHTML = `
        <div class="card info-card" >
         <h6 class="cart-title">
          ${note.title}
             <div>
              
            <i class="bi bi-pen-fill" onclick="editNote(${note.id})"></i>
             <i class="bi bi-backspace-fill" onclick="deletNote(${note.id})"></i>
             </div>

         </h6>
        <div>
          <div>
        ${note.text}
        </div> 
        `;
    // console.log(card)
    cardContainer.appendChild(card);
  });
}

function deletNote(id) {
  const getfromLS = JSON.parse(localStorage.getItem("noteList"));
  console.log(getfromLS);
  const updateNote = getfromLS.filter((notelist) => notelist.id !== id);
  localStorage.setItem("noteList", JSON.stringify(updateNote));
}

function editNote(id) {
  localStorage.setItem("editObject", id);

  location.assign("add.html");
}

function removeClidElement(e) {
  // console.log(e.target.classList)
  if (e.target.classList.contains("bi")) {
    e.target.parentElement.parentElement.parentElement.parentElement.remove();
  } else {
    console.log("no");
  }
}

function changeTge() {
  cardContainer.innerHTML = "";
  tags.forEach((tag) => (tag.classList = ""));

  this.classList = "active";

  tag = this.innerHTML;

  bildCard();
}

function searchQuery(e) {
  // console.log("input");
  const noteList = JSON.parse(localStorage.getItem("noteList"));
  //   console.log(noteList);

  // debounce();
  if (noteList) {
    function mydebunc() {
      const filterNoteBysearch = noteList.filter(
        (note) =>
          note.title.includes(e.target.value) ||
          note.text.includes(e.target.value)
      );
      generatNote(filterNoteBysearch);
      console.log("inupt");
    }
    // mydebunc();
    const debounce = _.debounce(mydebunc, 3000);
    debounce();
  }
}
