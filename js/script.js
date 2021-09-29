'use strict'
//Функция для переобразования обычной картинки в фоновою
function ibg() {
    $.each($('.ibg'), function(index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}
ibg();

//Переключение между меню и табуляция
const items = document.querySelectorAll('.nav-newsmedia__item.tab__navitem');
const blocks = document.querySelectorAll('.item-newsmedia__column');

items[0].addEventListener('click', (e) => {
    if (!(items[0].className.includes('active'))) {
        items[0].classList.toggle('active');
        items[1].classList.remove('active');
        items[2].classList.remove('active');
        blocks[0].style.display = 'none';
        blocks[1].style.display = 'block';
        blocks[2].style.display = 'none';
    }
})

items[1].addEventListener('click', (e) => {
    if (!(items[1].className.includes('active'))) {
        items[0].classList.remove('active');
        items[1].classList.toggle('active');
        items[2].classList.remove('active');
        blocks[0].style.display = 'block';
        blocks[1].style.display = 'none';
        blocks[2].style.display = 'block';
    }
})

items[2].addEventListener('click', (e) => {
    if (!(items[2].className.includes('active'))) {
        items[0].classList.remove('active');
        items[1].classList.remove('active');
        items[2].classList.toggle('active');
        blocks[0].style.display = 'block';
        blocks[1].style.display = 'block';
        blocks[2].style.display = 'block';
    }
})


//Adaptive functions
// $(window).resize(function(event) {
//     adaptive_function();
// });

// function adaptive_header(w, h) {
//     var headerMenu = $('.header-menu');
//     var headerLang = $('.header-top-lang');
//     if (w < 767) {
//         if (!headerLang.hasClass('done')) {
//             headerLang.addClass('done').appendTo(headerMenu);
//         }
//     } else {
//         if (headerLang.hasClass('done')) {
//             headerLang.removeClass('done').prependTo('.header-top');
//         }
//     }
//     if (w < 767) {
//         if (!$('.header-bottom-menu').hasClass('done')) {
//             $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
//         }
//     } else {
//         $.each($('.header-bottom-menu'), function(index, val) {
//             if ($(this).hasClass('header-bottom-menu-right')) {
//                 if ($(this).hasClass('done')) {
//                     $(this).removeClass('done').prependTo($('.header-bottom-column').eq(2));
//                 }
//             } else {
//                 if ($(this).hasClass('done')) {
//                     $(this).removeClass('done').prependTo($('.header-bottom-column').eq(0));
//                 }
//             }
//         });
//     }
// }

// function adaptive_function() {
//     var w = $(window).outerWidth();
//     var h = $(window).outerHeight();
//     adaptive_header(w, h);
// }
// adaptive_function();

//Apear and disapear burger-menu
$('.menu-header__icon').click(function(event) {
    $(this).toggleClass('active');
    $('.menu-header__menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body, html').scrollTop(parseInt($('body').data('scroll')));
    }
});



//Убераем вспливающие окна
/*
var input1 = document.getElementById('field1');
input1.addEventListener('invalid', function(event) {
    event.preventDefault();
});
var input2 = document.getElementById('field2');
input2.addEventListener('invalid', function(event) {
    event.preventDefault();
});
var input3 = document.getElementById('field3');
input3.addEventListener('invalid', function(event) {
    event.preventDefault();
});

//Проверка на валидность форми и изменения бордера соответсвующих полей

$('.content-form-btn').click(function(event) {
    var field1 = document.getElementById('field1');
    var field2 = document.getElementById('field2');
    var field3 = document.getElementById('field3');
    console.log(field1.value);
    console.log(field2.value);
    console.log(field3.value);

    if (field1.value === "") {
        field1.style.border = "2px solid red";
    } else {
        field1.style.border = "2px solid #959595";
    }
    if (field2.value === "") {
        field2.style.border = "2px solid red";
    } else {
        field2.style.border = "2px solid #959595";
    }
    if (field3.value === "") {
        field3.style.border = "2px solid red";
    } else {
        field3.style.border = "2px solid #959595";
    }
});

//Клик вне поля ввода

$(window).click(function(event) {
    var block4 = document.getElementsByClassName('contacts-content-form-body');
    var block1 = document.getElementById('field1');
    var block2 = document.getElementById('field2');
    var block3 = document.getElementById('field3');
    console.log(event.target.className);
    if ((event.target.className !== 'input') && (event.target.className !== 'content-form-btn btn btn-white')) {
        block1.style.border = "2px solid #959595";
        block2.style.border = "2px solid #959595";
        block3.style.border = "2px solid #959595";
        block1.value = "";
        block2.value = "";
        block3.value = "";

    };
});*/