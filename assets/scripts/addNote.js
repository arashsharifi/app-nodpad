const sunmitBtn = document.querySelector('#submit');
const form = document.querySelector("form");
console.log(sunmitBtn);

eventListener();

function eventListener() {
    sunmitBtn.addEventListener('click', handelSubmit)
}

function handelSubmit(e) {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(form).entries())
    if (formData.title && formData.text) {
        console.log('yes it can submit')
    } else {
        console.log('no it cant')
    }
}