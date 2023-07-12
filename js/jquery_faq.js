$(() => {

    const tim = document.querySelectorAll('dd')
    const toggleBtn = document.querySelector('button')
    toggleBtn.addEventListener('click', () => {
        tim.forEach(function (dd) {
            tim.cl
        })
    })

    $('dd').addClass('invisible')

    $('body').append(`
        <a href='#'>toggle invisibilty</a>
    `);
    $('a').on('click', () => {
        $(this).toggleClass('highlighted')
    })



    // $('#toggleBtn').on('click', () => {
    //     $('dd').first().toggleClass('DDCLass')
    // });




})