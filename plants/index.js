console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +24 \n2. Вёрстка соответствует макету. Ширина экрана 380px +24 \n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15 \n4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22\n Итого: 85/85');
const iconMenu = document.querySelector(".menu__icon");
const navLink = document.querySelector(".nav__list");
const navMenu = document.querySelector(".nav");
const logoHead = document.querySelector(".logo");

if (iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		iconMenu.classList.toggle("active");
		navMenu.classList.toggle("active");
	});
};

if (navLink) {
	navLink.addEventListener("click", function(e) {
		navMenu.classList.remove("active");
		iconMenu.classList.remove("active");
	});
};

window.addEventListener('click', function(e) {
	if (!iconMenu.contains(e.target) && !navMenu.contains(e.target) && !logoHead.contains(e.target)) {
		navMenu.classList.remove("active");
		iconMenu.classList.remove("active");
}
});
