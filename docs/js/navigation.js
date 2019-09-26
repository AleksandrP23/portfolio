$(document).ready(function() {

	// определение переменных
	var navToggleButton = $('#navigation__button');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');

	// функция для анимации иконки
	function navButtonToggle() {
		if (navToggleButton.hasClass("active")) {
            navToggleButton.removeClass("active")
        } else {
            navToggleButton.addClass("active")  
        }
	}
 
	// События по клику на иконку навигации
	navToggleButton.on('click', function(e){
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);

		navButtonToggle();
	})

	// События по клику на ссылки в навигационном меню
	navLink.on('click', function(){
		if (navBlock.hasClass(navBlockOpen)) {
			navButtonToggle();
		} 
		navBlock.removeClass(navBlockOpen);
	})
});