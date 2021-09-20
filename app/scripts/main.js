/* 
    Getting modal and overlay elements to show these on button click
*/
const modal = document.querySelector('.selection-modal');
const overlay = document.getElementById('overlay');

//Getting close button
const closeButton = document.querySelector('.modal-close');

//Getting all the buttons for which click event has to be defined
const buttons = document.querySelectorAll('.reward-btn');
console.log(buttons);

//Adding click event for all the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        overlay.classList.add('active');
        modal.classList.add('active');
    });
});

//Now adding the click event to the close button
closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');
    modal.classList.remove('active');
})

/*
    If anywhere on the overlay is clicked then, the modal 
    must be closed, so adding event listener to the overlay
    as well.
*/
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    modal.classList.remove('active');
})