$(() => {

    function underlineThis() {
        $(this).css('text-decoration','underline')
    }

    function noUnderlineThis(){
        $(this).css('text-decoration', 'none')
    }

    function changeToPointer() {
        $(this).css('cursor','pointer')
    }

    function changeFromPointer() {
        $(this).css('cursor','default')
    }

   $('h2')
       .on('click', underlineThis)
       .on('dblclick', noUnderlineThis)
       .on('mouseenter', changeToPointer )
       .on('mouseleave', changeFromPointer)


})