// modal
// active button
const mainEl = document.querySelector('#main');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal')

//close button
const infoButtonModal = document.querySelector('#infoBtnModal')

mainEl.addEventListener('click', (event) => {

    if (event.target.matches("#infoBtn")) {
        console.log("working")
        modal.classList.add('is-active');
    }
});

modalBg.addEventListener('click', () => {
    modal.classList.add('is-active');
});

infoButtonModal.addEventListener('click', () => {
    modal.classList.remove('is-active');
});