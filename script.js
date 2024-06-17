document.addEventListener('DOMContentLoaded', () => {
    const popupButton = document.getElementById('popupButton');
    const popup = document.getElementById('popup');
    const close = document.querySelector('.close');

    popupButton.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});

function respondYes() {
    alert('Ti amo anche io!');
    document.getElementById('popup').style.display = 'none';
}

function respondNo() {
    alert('Oh no!');
    document.getElementById('popup').style.display = 'none';
}
