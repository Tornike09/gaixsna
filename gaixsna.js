const congrulation = document.querySelector('.congrulation-div');

function toggleMenu() {
    congrulation.style.display = 'flex';
}

document.querySelector('.registration-btn').addEventListener('click', toggleMenu);