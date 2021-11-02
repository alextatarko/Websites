// Test import of styles
import '@/styles/index.scss'

import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const initSlider = () => {
	const swiper = new Swiper('.swiper', {
	// Optional parameters
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		// navigation
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

const init = () => {
	initSlider();
}

document.addEventListener("DOMContentLoaded", init());