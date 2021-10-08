//------------------------------Hamburger button actions - Starts---------------------------------------

//Parent div containing the hamburger menu links visible for a certain screen size only
const mobileLinks = document.getElementById('mobile-links');

//Child div of mobileLiks containing all the links
const headerLinksMobile = document.querySelector('.header-links-mobile');

/*
    Actually images are given for the hamburger menu button and its corroesponding close button,
    so getting the img element which is having an id click image; to be used further. 
*/
const clickImage = document.getElementById('click-image');

/*
    A javascript function to handle the click actions of the hamburger button(image), you can see the index.html file
    there I have specified this function to be called on the hamburger button(image) click.

    Following function opens the hamburger menu and an overlay if them menu has been closed or closes the hamburger menu
    and removes the overlay if it's open.

    Parameter element is the one which has been passed as 'this' to whichever element has called this function. (Here in
    this case the hamburger button(image)).
*/
const handleHamburgerClick = (element) => {

    if (mobileLinks.classList.contains('fade-in')) {

        element.src = './images/icon-hamburger.svg';
        mobileLinks.classList.remove('fade-in');
        headerLinksMobile.classList.remove('active');

    } else {

        element.src = './images/icon-close-menu.svg';
        mobileLinks.classList.add('fade-in');
        headerLinksMobile.classList.add('active');

    }

}

/*
    Adding click event to all the links which gets opened on the hamburger button(image) click; taking us to the respective
    section of the web page based on the clicked link, i.e. (About, Discover, Get Started), thereby closing the hamburger
    menu.
*/
mobileLinks.addEventListener('click', (event) => {
    mobileLinks.classList.remove('fade-in');
    headerLinksMobile.classList.remove('active');
    clickImage.src = './images/icon-hamburger.svg';

})

//------------------------------Hamburger button actions - Ends---------------------------------------

//------------------------------Bookmark button actions - Starts---------------------------------------

//This contains the bookmark image as well as div
const bookmarkContainer = document.querySelector('.project-button-container');

const bookmarkImage = document.getElementById('bookmark-img');
const bookmarkText = document.getElementById('bookmark-text');

bookmarkContainer.addEventListener('click', () => {
    bookmarkImage.classList.toggle('bookmarked');
    bookmarkText.classList.toggle('bookmarked');

    if(bookmarkImage.classList.contains('bookmarked')) {
        bookmarkImage.src = './images/icon-bookmarked.svg';
        bookmarkText.innerText = "Bookmarked";
    } else {
        bookmarkImage.src = './images/icon-bookmark.svg';
        bookmarkText.innerText = "Bookmark";
    }
})

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
        Following code ensures if the user clicks on modal it must not be closed, but should be closed only and only 
        when the div with id overlay has been clicked (Listen for only parent events, not the child)
     */
    if (event.currentTarget === event.target) {  //Awesome - source: https://simplernerd.com/js-click-parent/ 
        overlay.classList.remove('active');
        modal.classList.remove('active');

        if (messageModal.classList.contains('active'))
            messageModal.classList.remove('active');
    }
})

//---------------------------------Overlay and Modal related actions - Ends----------------------------------------

//-------------------------------Radio button related actions - Starts---------------------------------------

/*
    The following code ensures that based on the pledge selected by the user, the donate section corroesponding to the 
    pledge will be visible to the user.
*/
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