// Test import of styles
import '@/styles/index.scss'

// components
import initSlider from './components/slider/slider';


const init = () => {
	initSlider();
}

document.addEventListener("DOMContentLoaded", init());