// $(() => {
//
//     const tim = document.querySelectorAll('dd')
//     const toggleBtn = document.querySelector('button')
//     toggleBtn.addEventListener('click', () => {
//         tim.forEach(function (dd) {
//             tim.cl
//         })
//     })
//
//     $('dd').addClass('invisible')
//
//     $('body').append(`
//         <a href='#'>toggle invisibilty</a>
//     `);
//     $('a').on('click', () => {
//         $(this).toggleClass('highlighted')
//     })
//
//
//
//     // $('#toggleBtn').on('click', () => {
//     //     $('dd').first().toggleClass('DDCLass')
//     // });
//
//
//
//
//})

$(() => {


    // jQuery...

    // $('body').append(`
    //     <a href="#">Toggle Invisibility</a>
    // `);
    //
    // $('a').on('click', () => {
    //     $('dd').toggleClass('invisible');
    // });
    //
    // // BONUS
    // $('dt').on('click', function() {
    //     $(this).toggleClass('highlighted')
    // });



    // JS...

    const toggleVisibilityLink = document.createElement('a');
    toggleVisibilityLink.innerText = 'Toggle Visibility';

    const bodyElement = document.querySelector('body');
    bodyElement.appendChild(toggleVisibilityLink);

    const ddElements = document.querySelectorAll('dd');
    toggleVisibilityLink.addEventListener('click', () => {
        ddElements.forEach((ddElement) => {
            ddElement.classList.toggle('invisible');
        });
    });

    const dtElements = document.querySelectorAll('dt');
    dtElements.forEach((dtElement) => {
        dtElement.addEventListener('click', () => {
            dtElement.classList.toggle('highlighted');
        });
    });

    // Event Delegation
    // const dlElement = document.querySelector('dl');
    // dlElement.addEventListener('click', (e) => {
    //     console.log(e.target);
    //     if(e.target.localName === 'dt') {
    //         e.target.classList.toggle('highlighted');
    //     }
    // });




    // // Beau's Code
    // function toggle() {
    //     const toggleButtons = document.querySelectorAll('dd')
    //     for (let i = 0; i < toggleButtons.length; i++) {
    //         toggleButtons[i].style.visibility = 'visible'
    //         if (toggleButtons === "click") {
    //             return toggle('button')
    //         }
    //     }
    // }

    // const lastListItem = .ul.children()
    // const toggleYellow = document.querySelectorAll('li')
    // const toggleBtn = document.getElementById('toggleBtn')
    // toggleBtn.addEventListener('click',() => {
    //     toggleYellow.forEach((toggleYellow) => {
    //         toggleYellow.classList.toggle('invisible');
    //     })
    // })

    const yellowButton = document.querySelector('#toggleBtn')
    const ulElements = document.querySelectorAll('ul')

    function handleMakeYellowClick (e) {
        ulElements.forEach((ulElement) => {
            ulElement.lastElementChild.classList.toggle('yellow')
        })
    }

    yellowButton.addEventListener('click', handleMakeYellowClick);

    // $('.state-parks').children().last()
    //
    //     .css('background-color', 'yellow')

    // $(document).on('click', '#toggleBtn', function(e) {
    //     // Select the last list item in each unordered list and modify the background color
    //     $('ul li:last-child').css('background-color', 'yellow');
    // });
















});