document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            alert('You are about to visit: ' + link.textContent);
        });
    });
});
