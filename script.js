let menu = document.querySelector('.burger');
let navButton = document.querySelector('.navbar');
let cancel = document.querySelector('.close');

menu.addEventListener('click', () => {
    navButton.style.display = 'block';
});

cancel.addEventListener('click', () => {
    navButton.style.display = 'none';
}); 