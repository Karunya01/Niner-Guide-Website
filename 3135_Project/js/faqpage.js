'use strict';

const root = document.documentElement;

const buttons = document.querySelectorAll('.accordion-label');

function buttonClick(event) {
    const btn = event.target;
    const content = btn.nextElementSibling;

    btn.classList.toggle('open');
    content.classList.toggle('open');

    
    root.style.setProperty('--content-height', content.scrollHeight + 'px');

    buttons.forEach(button => {
        if (button !== btn && button.classList.contains('open')) {
            button.classList.remove('open');
            button.nextElementSibling.classList.remove('open');
        }
    });
}


buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});