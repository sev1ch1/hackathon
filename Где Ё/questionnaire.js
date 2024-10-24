document.addEventListener('DOMContentLoaded', function () {
    // Modal functionality
    const submitBtn = document.getElementById('submitBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    submitBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Change color of selected options
    const options = document.querySelectorAll('input[type="radio"]');

    options.forEach(option => {
        option.addEventListener('change', function () {
            options.forEach(opt => {
                const label = opt.nextElementSibling;
                label.style.backgroundColor = opt.checked ? '#555' : 'transparent';
            });
        });
    });
});
