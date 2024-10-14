'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const leftBtn = document.querySelector('.left');
    const rightBtn = document.querySelector('.right');

    const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    const navItems = Array.from(document.querySelectorAll('.nav-item'));
    const CAROUSEL_SIZE = carouselItems.length;

    const carouselNav = document.querySelector('.carousel-nav');

    leftBtn.addEventListener('click', swipe);
    rightBtn.addEventListener('click', swipe);

    carouselNav.addEventListener('click', clickOnDot);

    function swipe(e){
        const currentCarouselItem = document.querySelector('.carousel-item.active');
        const currentIndex = carouselItems.indexOf(currentCarouselItem);
     
        let nextIndex;
     
        if(e.currentTarget.classList.contains('left')){
             if(currentIndex === 0 ){
                 nextIndex = CAROUSEL_SIZE - 1;
             }
             else{
                 nextIndex = currentIndex - 1;
             }
        } 
        else{
             if(currentIndex === CAROUSEL_SIZE - 1 ){
                 nextIndex = 0;
             }
             else{
                 nextIndex = currentIndex + 1;
             }
        }
        
        carouselItems[nextIndex].classList.add('active');
        navItems[nextIndex].classList.add('active');
        currentCarouselItem.classList.remove('active');
        navItems[currentIndex].classList.remove('active');
    }
    
    function clickOnDot(e) {
        const targetDot = e.target;
        if (!targetDot.classList.contains('nav-item')) return;

        const currentDotIndex = navItems.indexOf(targetDot);
        const currentCarouselItem = document.querySelector('.carousel-item.active');
        const currentNavItem = document.querySelector('.nav-item.active');

        if (targetDot === currentNavItem) return;

        const currentIndex = carouselItems.indexOf(currentCarouselItem);

        currentCarouselItem.classList.remove('active');
        currentNavItem.classList.remove('active');

        carouselItems[currentDotIndex].classList.add('active');
        targetDot.classList.add('active');
    }
});