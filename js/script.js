const animItems = document.querySelectorAll('.block-text, .body-statistics-experts__item');

if (animItems.length > 0) {

    let scrollTimeout;

    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(animOnScroll, 50);
    });

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];

            // Проверка, был ли элемент уже анимирован
            if (!animItem.classList.contains('_animated')) {
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                    animItem.classList.add('_animated');
                } else {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    animOnScroll();
}

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".icon-menu");
    const menu = document.querySelector(".menu__body");
    const body = document.body;



    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("menu_open");
        menuBtn.classList.toggle("active");
    });

   
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove("menu_open");
            menuBtn.classList.remove("active");
        }
    });
});