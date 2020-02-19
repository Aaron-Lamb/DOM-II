// Your code goes here
let halt = document.querySelectorAll('a.nav-link');
halt.forEach(navLink => {
    navLink.addEventListener('click', () => {
        halt.preventDefault();
    })
})

let mainContent = document.querySelector('body');
let headBar = document.querySelector('header');
let footBar = document.querySelector('footer');

let buttons = document.querySelectorAll('div.btn');
    buttons[0].addEventListener('click', (buttoner) => {
        if (mainContent.style.backgroundColor === 'aliceblue') {
            mainContent.style.backgroundColor = 'lightblue';
          } else {
            mainContent.style.backgroundColor = 'aliceblue';
          }
          buttoner.stopPropagation();
    })
    
    buttons[1].addEventListener('mouseenter', (mover) => {
        mainContent.style.color = 'darkblue';
        mover.stopPropagation();
    })

    buttons[1].addEventListener('mouseleave', (bye) => {
        headBar.style.color = 'red';
        bye.stopPropagation();
    })

    buttons[2].addEventListener('mouseleave', (crazy) => {
        headBar.style.backgroundColor = 'pink';
        crazy.stopPropagation();
    })

    buttons[2].addEventListener('mouseenter', (hello) => {
        footBar.style.backgroundColor = 'lavender';
        hello.stopPropagation();
    })