// Инициализируем Swiper
new Swiper('.swiper', {
	// стрілки
	navigation: {
		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},
	// скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	watchOverflow: true,
	loop: true,
	autoplay: {
		// Пауза между прокруткой
		delay: 3000,
		// Закончить на последнем слайде
		stopOnLastSlide: false,
		// Отключить после ручного переключения
		disableOnInteraction: false
	},
	speed: 500,
});