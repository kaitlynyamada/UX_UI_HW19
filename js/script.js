/*mobile menu*/
$('.mobile-menu').on('click', function() {
    $('.nav-mobile').slideToggle();
});

/*
===================================================================
card interactions
====================================================================*/
/*water U doing*/
$('.works-content__water').hover(function() {
    $(this).addClass('shadow-drop-bottom');
}, function() {
    $(this).removeClass('shadow-drop-bottom');
}
);

$('.works-content__sara').hover(function() {
    $(this).addClass('shadow-drop-bottom');
}, function() {
    $(this).removeClass('shadow-drop-bottom');
}
);

/*
===================================================================
button interactions
====================================================================*/
$('.button-primary').hover(function() {
    $(this).addClass('button-hover');
}, function() {
    $(this).removeClass('button-hover');
}
);
