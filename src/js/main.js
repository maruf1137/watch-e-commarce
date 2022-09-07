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

// auth popup
const auth = document.querySelector('.auth');
const openAuthPopup = document.querySelectorAll('.btn-auth');
const closeAuthPopup = document.querySelector('.close-popup');
const AuthOverlay = document.querySelector('.auth .overlay');

openAuthPopup.forEach((e) => {
	e.addEventListener('click', () => {
		auth.classList.toggle('show-popup');
	});
});

function closeAuthPopupFunc() {
	auth.classList.remove('show-popup');
}
closeAuthPopup.addEventListener('click', closeAuthPopupFunc);
AuthOverlay.addEventListener('click', closeAuthPopupFunc);
