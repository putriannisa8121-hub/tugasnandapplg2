$(document).ready(function() {
    $('#slider img:gt(0)').hide();

    setInterval(function() {
        $('#slider :first-child')
        .fadeOut()
        .next()
        .fadeIn()
        .end()
        .appendTo('#slider');
    }, 3000);
});