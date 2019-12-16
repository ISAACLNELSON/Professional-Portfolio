'use strict';

//on menu click open or close nav bar for mobile
function mobileClick(){
    $('#hamburger').on('click', () => {
        //show or hide header with transition
        console.log('clicked');
        $('header').slideToggle();
    })
}
mobileClick();