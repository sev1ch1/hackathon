document.addEventListener('DOMContentLoaded', function () {
    // Модальные элементы
    const submitBtn = document.getElementById('submitBtn');
    const modal = document.getElementById('modal');
    const blurBackground = document.getElementById('blurBackground');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Открытие модального окна и затемнение/размытие фона
    submitBtn.addEventListener('click', function () {
        modal.style.display = 'block';
        blurBackground.style.display = 'block';
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        blurBackground.style.display = 'none';
    });

    // Закрытие модального окна по клику на затемненный фон
    blurBackground.addEventListener('click', function () {
        modal.style.display = 'none';
        blurBackground.style.display = 'none';
    });
});

