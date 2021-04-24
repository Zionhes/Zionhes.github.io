'use strict';

////////////////////////////////////////////////////////////////////////////////////
/***********************/// NAVIGATION LIST BUG FIX ///***************************/
/////////////////////////////////////////////////////////////////////////////////
//// VARIABLES
const navigation__button = document.querySelector('.navigation__button');
const navigation__list = document.querySelector('.navigation__list');
const halfSecond = 500;
///////////////////////////////////////////////////////////////
//// FUNCTIONS
function hideNavigation__list() {
    navigation__list.classList.add('hide');
}

function showNavigation__list() {

    if (navigation__list.classList.contains('show')) {
        setTimeout(function() {
            navigation__list.classList.remove('show');
        }, halfSecond);
        return;
    }

    navigation__list.classList.add('show');
}
///////////////////////////////////////////////////////////////
//// NAVIGATION LIST EJECUTION
hideNavigation__list();
navigation__button.addEventListener('click', showNavigation__list);


////////////////////////////////////////////////////////////////////////////////////
/**********************/// POPUP EXTRA FUNCTIONALITY ///**************************/
/////////////////////////////////////////////////////////////////////////////////
//// VARIABLES
const popup = document.querySelector('.popup__background');
///////////////////////////////////////////////////////////////
//// FUNCTIONS
function hidePopup() {
    popup.classList.add('hide')
}

popup.addEventListener('click', function () {

    document.querySelector('.popup__close').click()
});