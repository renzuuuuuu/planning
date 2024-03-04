document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const targetSection = urlParams.get('section');

    if (targetSection) {
        const targetElement = document.getElementById(targetSection);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        var header = item.querySelector('.accordion-header');

        header.addEventListener('click', function () {
            item.classList.toggle('active');
        });
    });
});


function toggleAccordion(element) {
    const content = element.querySelector('.accordion-content');
    content.classList.toggle('open');
}