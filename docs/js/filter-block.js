$(document).ready(function() {

    // определение переменных
    var filterButton = $('.filter-block__button');

    filterButton.on('click', function(e) {
        e.preventDefault();
        if (filterButton.hasClass('filter-block__button--active')) {
            filterButton.removeClass('filter-block__button--active');
            $(this).addClass('filter-block__button--active');
        } else {
            $(this).addClass('filter-block__button--active');
        }
    });
})

