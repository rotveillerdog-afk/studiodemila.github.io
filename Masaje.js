
window.onload = function () {
    const nachalo = document.getElementById("Nachalo");
    const infa = document.getElementById("Infa");
    const vidiMassaja = document.getElementById("VidiMassaja");
    const sert = document.getElementById("Sert");
    const btnkontakt = document.getElementById("BtnKontakt");

    const btnNachalo = document.getElementById("BtnNachalo");
    const btninfa = document.getElementById("BtnInfa");
    const btnvidiMassaja = document.getElementById("BtnVidiMassaja");
    const btnsert = document.getElementById("BtnSert");
    const contactBlock = document.getElementById("Contact");
    const vidiMassajasBlock2 = document.getElementById("VidiMassajasBlock2");


    // Функция для скрытия всех блоков
    function hideAllSections() {
        nachalo.style.display = "none";
        infa.style.display = "none";
        vidiMassaja.style.display = "none";
        sert.style.display = "none";
    }

    // Показать только нужный блок
    function showSection(section) {
        hideAllSections();
        section.style.display = "flex";
        window.scrollTo({ top: 0, behavior: "smooth" }); // прокрутка вверх
    }

    // Сначала показываем Заголовок
    showSection(nachalo);

    // Назначаем обработчики кнопкам
        btnNachalo.onclick = function () {
        showSection(nachalo);
    };

    btninfa.onclick = function () {
        showSection(infa);
    };

    btnvidiMassaja.onclick = function () {
    showSection(vidiMassaja);
    };

    vidiMassajasBlock2.onclick = function () {
    showSection(vidiMassaja);
    setTimeout(() => {
    vidiMassaja.scrollIntoView({ behavior: "smooth", block: "start" }); //{ behavior: "smooth" } — делает прокрутку плавной.  block: "start" — прокрутка к верхнему краю элемента.
    }, 50); // небольшая задержка, чтобы успело показаться
};

    btnsert.onclick = function () {
        showSection(sert);
    };

    if (btnkontakt && contactBlock) {
    btnkontakt.onclick = function () {
        // Сначала показываем главную страницу
        showSection(nachalo);

        // Потом прокручиваем к блоку "Контакты"
        setTimeout(() => {
            contactBlock.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // задержка, чтобы DOM успел отобразить блок
    };
};
    }


document.addEventListener("DOMContentLoaded", function () {
    const blocks = document.querySelectorAll('.VidiMassajas-block');

    blocks.forEach(block => {
        const header = block.querySelector('.VMheader');

        header.addEventListener('click', function (e) {
            e.stopPropagation();

            const isActive = block.classList.contains('active');

            // Закрываем все
            blocks.forEach(b => b.classList.remove('active'));

            // Открываем текущий, если он не был активен
            if (!isActive) {
                block.classList.add('active');

                // // Скроллим к открытому блоку (опционально)
                // block.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Клик вне меню — закрываем всё
    document.addEventListener('click', function () {
        blocks.forEach(b => b.classList.remove('active'));
    });
});

/* blocks — это коллекция всех элементов с классом .VidiMassajas-block, полученная вот так:const blocks = document.querySelectorAll('.VidiMassajas-block');  */
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('#Nav-Menu');
    const navBtn = document.querySelector('#Nav-button');
    const navBtnImg = document.querySelector('#Nav-button-img');
    const menu = document.querySelector('.Menu');

    // Открытие/закрытие по кнопке
    navBtn.onclick = () => {
        const isOpen = nav.classList.toggle('open');
        navBtnImg.src = isOpen ? "foto/nav-close.svg" : "foto/nav-open.svg";
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    // Делегируем событие клика на меню
    menu.addEventListener('click', (e) => {
        // Проверим, что клик был по пункту (li или вложенному h3)
        const li = e.target.closest('li');
        if (li && nav.classList.contains('open')) {
            nav.classList.remove('open');
            navBtnImg.src = "foto/nav-open.svg";
            document.body.style.overflow = '';
        }
    });
});

// Добавить или нет, подумать!!!!
// navBtn.onclick = () => {
//     if(nav.classList.toggle('open')) {
//         navBtnImg.src = "foto/nav-close.svg";
//         document.body.style.overflow = 'hidden'; // Блокируем скролл
//     } else {
//         navBtnImg.src = "foto/nav-open.svg";
//         document.body.style.overflow = ''; // Возвращаем скролл
//     }
// }