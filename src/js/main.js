
// sidebar

const openSidebarBtn = document.querySelector('.btn-bars');
const closeSidebarBtn = document.querySelector('.btn-close-sidebar');
const main = document.querySelector('.main');

openSidebarBtn.addEventListener('click', () => {
	main.classList.toggle('show-sidebar');
});

closeSidebarBtn.addEventListener('click', () => {
	main.classList.remove('show-sidebar');
});

// 