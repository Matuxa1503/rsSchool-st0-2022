console.log('1. Вёрстка валидная +10 \n2. Вёрстка семантическая +20 \n3. Вёрстка соответствует макету +48 \n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20\n Итого: 110/110');
// Блюр
const gardensBtn1 = document.getElementById("gardens__btn1");
const lawnBtn2 = document.getElementById("lawn__btn2");
const plantingBtn3 = document.getElementById("planting__btn3");

const gardens = document.querySelectorAll(".garden");
const lawn = document.querySelectorAll(".lawn");
const planting = document.querySelectorAll(".planting");


gardens.forEach(item => gardensBtn1.addEventListener("click", function(e) {
	item.classList.toggle("gardenBlur");
}));

lawn.forEach(item => lawnBtn2.addEventListener("click", function(e) {
	item.classList.toggle("lawnBlur");
}));

planting.forEach(item => plantingBtn3.addEventListener("click", function(e) {
	item.classList.toggle("plantingBlur");
}))


if (gardensBtn1) {
	gardensBtn1.addEventListener("click", function(e) {
		gardensBtn1.classList.toggle("activeBtn1");
	});
};

if (lawnBtn2) {
	lawnBtn2.addEventListener("click", function(e) {
		lawnBtn2.classList.toggle("activeBtn2");
	});
};

if (plantingBtn3) {
	plantingBtn3.addEventListener("click", function(e) {
		plantingBtn3.classList.toggle("activeBtn3");
	});
};


// Конец блюра
=======
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
