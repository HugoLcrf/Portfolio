function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.querySelector('button').addEventListener('click', toggleMenu);