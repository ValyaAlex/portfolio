$('.category__list button').on('click', function () {
    $('.category__list button').removeClass('category__btn--active');
    $(this).addClass('category__btn--active'); // выделяем выбранную категорию

    var cat = $(this).attr('data-filter'); // определяем категорию
    var button = $(".show-more__btn");

    if (cat == 'all') { // если all
        $('.table-prices tr').show();
        button.show();
        more(); // отображаем все позиции
    } else { // если не all
        $('.table-prices tr').hide(); // скрываем все позиции
        $('.table-prices tr[data-filter="' + cat + '"]').show(); // и отображаем позиции из соответствующей категории

        button.hide();
    }
});


function more() {
    var list = $(".table-prices .box");
    var numToShow = 10; //сколько показывать элементов
    var button = $(".show-more__btn");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function () {
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
    })
}

$(document).ready(function () {
    more()
}); 