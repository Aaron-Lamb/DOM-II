// Your code goes here
let halt = document.querySelectorAll('.nav-link');
halt.forEach(navLink => {
    navLink.addEventListener('click', (preDef) => {
        preDef.preventDefault();
    })
});

let buttons = document.querySelectorAll('.btn');

