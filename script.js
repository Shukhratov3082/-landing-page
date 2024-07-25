document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
});

function toggle() {
    let phoneNumbers = document.getElementById('phoneNumbers');
    if (phoneNumbers.style.display === 'none' || phoneNumbers.style.display === '') {
        phoneNumbers.style.display = 'block';
    } else {
        phoneNumbers.style.display = 'none';
    }
}
