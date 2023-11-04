// Burger menu
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








// Blur
// const gardensBtn1 = document.getElementById("gardens__btn1");
// const lawnBtn2 = document.getElementById("lawn__btn2");
// const plantingBtn3 = document.getElementById("planting__btn3");

// const gardens = document.querySelectorAll(".garden");
// const lawn = document.querySelectorAll(".lawn");
// const planting = document.querySelectorAll(".planting");


// gardens.forEach(item => gardensBtn1.addEventListener("click", function(e) {
// 	item.classList.toggle("gardenBlur");
// }));

// lawn.forEach(item => lawnBtn2.addEventListener("click", function(e) {
// 	item.classList.toggle("lawnBlur");
// }));

// planting.forEach(item => plantingBtn3.addEventListener("click", function(e) {
// 	item.classList.toggle("plantingBlur");
// }))


// if (gardensBtn1) {
// 	gardensBtn1.addEventListener("click", function(e) {
// 		gardensBtn1.classList.toggle("activeBtn1");
// 	});
// };

// if (lawnBtn2) {
// 	lawnBtn2.addEventListener("click", function(e) {
// 		lawnBtn2.classList.toggle("activeBtn2");
// 	});
// };

// if (plantingBtn3) {
// 	plantingBtn3.addEventListener("click", function(e) {
// 		plantingBtn3.classList.toggle("activeBtn3");
// 	});
// };


// // Accordion
// document.querySelectorAll(".accordion__item").forEach((el) => {
// 	el.addEventListener("click", () => {
// 		let content = el.nextElementSibling;
// 		if (content.style.maxHeight) {
// 			document.querySelectorAll(".accordion__item-active").forEach((el) => el.style.maxHeight = null)
// 		} else {
// 			document.querySelectorAll(".accordion__item-active").forEach((el) => el.style.maxHeight = null)
// 			content.style.maxHeight = 108 + 'px';
// 		}
// 	});
// });

// document.querySelectorAll(".accordion__item").forEach((item) => {
// 	item.addEventListener("click", () => {
// 		item.classList.toggle("open");
// 		const rotateIcon = document.querySelectorAll(".accordion__img");
// 		rotateIcon.forEach(x => x.classList.toggle("rotate"));
// 	});
// });





