window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

const loginBtn = document.getElementById('loginBtn');
const orderBtn = document.getElementById('orderBtn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const continueBtn = document.querySelector('.continue-btn');
const roleButtons = document.querySelectorAll('.role-btn');

let selectedRole = null; 

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    resetSelection(); 
}

loginBtn.addEventListener('click', openModal);
orderBtn.addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

roleButtons.forEach(button => {
    button.addEventListener('click', () => {
        roleButtons.forEach(btn => btn.classList.remove('selected'));

        button.classList.add('selected');
        selectedRole = button.getAttribute('data-role'); 
    });
});

continueBtn.addEventListener('click', () => {
    if (selectedRole) {
        switch (selectedRole) {
            case 'Администратор':
                window.location.href = 'admin_login.html'; 
                break;
            case 'Менеджер проекта':
                window.location.href = 'manager_login.html'; 
                break;
            case 'Клиент':
                window.location.href = 'client_login.html'; 
                break;
            default:
                alert('Ошибка: выбрана неизвестная роль');
        }
    } else {
        alert('Пожалуйста, выберите роль!');
    }
});

function resetSelection() {
    roleButtons.forEach(btn => btn.classList.remove('selected'));
    selectedRole = null;
}



