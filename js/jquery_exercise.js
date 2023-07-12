$(function() {
    function addBackground() {
        $(this).css('background-color','blue')
    }

    function biggerText() {
        $(this).css('font-size','18px')
    }

    function colorToRed() {
        $(this).css('color', 'red')
    }

    function colorFromRed() {
        $(this).css('color', 'unset')
    }

    $('h1')
        .on('click', addBackground)

    $('p')
        .on('dblclick',biggerText)

    $('li')
        .on('mouseenter',colorToRed)
        .on('mouseleave', colorFromRed)

});