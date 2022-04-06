// modal
// activate button
const infoButton = document.querySelector('#infoBtn');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal')

//close button
const infoButtonModal = document.querySelector('#infoBtnModal')

infoButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.add('is-active');
});

infoButtonModal.addEventListener('click', () => {
    modal.classList.remove('is-active');
});