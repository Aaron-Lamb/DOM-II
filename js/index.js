// Your code goes here
let halt = document.querySelectorAll('.nav-link');
halt.forEach(navLink => {
    navLink.addEventListener('click', () => {
        halt.preventDefault();
    })
});

let buttons = document.querySelectorAll('.btn');
buttons.forEach(btnEvent => {
    btnEvent.addEventListener('click', () => {
        buttons.style.color = 'red';
        
    }
    
    )
})
