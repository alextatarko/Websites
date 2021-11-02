import Swiper from 'swiper/bundle';
// import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/pagination';
import 'swiper/css';

const initSlider = () => {
	const $pagination = document.querySelector( '.swiper-pagination');
	const $swiper = document.querySelector( '.swiper');

	const swiper = new Swiper( $swiper, {
		// Optional parameters
		loop: false,
		// pagination: {
		// 	el: '.swiper-pagination',
		// },
		// navigation
		init: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	swiper.on('init',  () => {
		$pagination.textContent = ` ${ swiper.realIndex + 1} / ${ swiper.slides.length }`;
	});
	swiper.on('slideChange',  () => {
		$pagination.textContent = ` ${ swiper.realIndex + 1} / ${ swiper.slides.length }`;
	});
	swiper.init();
}

export default initSlider;