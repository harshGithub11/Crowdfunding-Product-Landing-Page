//------------------------------Hamburger button actions - Starts---------------------------------------

const hamburgerImage = document.getElementById('hamburger');
console.log(hamburgerImage);

//------------------------------Hamburger button actions - Ends---------------------------------------

//------------------------------Bookmark button actions - Starts---------------------------------------


//------------------------------Bookmark button actions - Ends--------------------------------------

//---------------------------Thanks message overlay actions - Starts-----------------------------------

const messageModal = document.querySelector('.message-modal-card');

//Getting close button
const closeMessageModal = document.querySelector('.got-it');

//Getting all the buttons for which click event has to be defined
const openMessageModalButtons = document.querySelectorAll('.btn-amt');

//Adding click event for all the buttons
openMessageModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove('active');
        messageModal.classList.add('active');
    });
});

//Now adding the click event to the close button
closeMessageModal.addEventListener('click', () => {
    overlay.classList.remove('active');
    messageModal.classList.remove('active');
})

//----------------------------Thanks message overlay actions - Ends------------------------------------

//---------------------------------Overlay and Modal related actions - Starts----------------------------------------

/* 
    Getting modal and overlay elements to show these on button click
*/
const modal = document.querySelector('.selection-modal');
const overlay = document.querySelector('.overlay');

//Getting close button
const closeButton = document.querySelector('.modal-close');

//Getting all the buttons for which click event has to be defined
const buttons = document.querySelectorAll('.reward-btn');

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
overlay.addEventListener('click', (event) => {
    
    /* 
        Line no 35 ensures that if the user clicks on modal it must not be closed, but should be closed only and only 
        when the div with id overlay has been clicked (Listen for only parent events, not the child)
    */
    if(event.currentTarget === event.target) {  //Awesome - source: https://simplernerd.com/js-click-parent/ 
        overlay.classList.remove('active');
        modal.classList.remove('active');

        if(messageModal.classList.contains('active'))
            messageModal.classList.remove('active');
    }
})

//---------------------------------Overlay and Modal related actions - Ends----------------------------------------

//-------------------------------Radio button related actions - Starts---------------------------------------

const radioButtons = document.querySelectorAll('.radio-btn');
const donateSections = document.querySelectorAll('.modal-pledge-card-donate');

const handleRadioClick = () => {
    
    for (let i = 0; i < radioButtons.length; i++) {

        if (radioButtons[i].checked) {
            donateSections[i].classList.remove('display-none');
        } else if (!donateSections[i].classList.contains('display-none')) {
            donateSections[i].classList.add('display-none');
        }
    
    };

}

//-------------------------------Radio button related actions - Ends---------------------------------------

//-------------------------------Continue button actions - Starts---------------------------------------

const continueButtons = document.querySelectorAll('.btn-amt');
const inputFields = document.querySelectorAll('.num-field');

const handleContinueClick = (event) => {
    console.log(event.target.id);
}

const validateAmount = (id, amount) => {
    
    let isValid = true;

    switch(id) {
        case 1: 
            if(amount < 25) {
                isValid = false;
            }
            break;
        case 2: 
            if(amount < 75) {
                isValid = false;
            }
            break;
        default:
            break;
    } 

    return isValid;
}

//Adding click event listener for each button
continueButtons.forEach(continueButton => {
    continueButton.addEventListener('click', handleContinueClick);
})

//-------------------------------Continue button actions - Ends---------------------------------------