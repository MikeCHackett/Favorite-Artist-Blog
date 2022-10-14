/* Checks to see if document is loaded before we access it */

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var buyTicketsButton = document.getElementsByClassName('tour-btn');
    for (var i = 0; i < buyTicketsButton.length; i++) {
        buyTicketsButton[i].addEventListener('click', buyTicketsClicked)
    }
}

function buyTicketsClicked() {
    alert('We apologize for the inconvenience, but these tickets have been sold out')
    return
}