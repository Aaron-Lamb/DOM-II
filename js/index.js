// Your code goes here
let body = document.querySelector("body");
body.addEventListener('contextmenu', (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color = "cyan";
})
body.addEventListener('click', (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
})
body.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor = "darkblue";
    event.target.style.color = "orange";
})
body.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
})

let busImg = document.querySelectorAll("img")[0];
busImg.addEventListener('dblclick', (event) => {
    event.stopPropagation();
    event.target.style.border = "3px solid blue";
    event.target.style.padding = "2%";
})

let navigation = document.querySelectorAll("header")[0];
navigation.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = "blanchedalmond";
})
navigation.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'cyan';
})

let heading = document.querySelectorAll("header")[1];
console.log(heading);
heading.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = "slategray";
})

let anchors = document.querySelectorAll("a");
anchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach((para) => {
    para.classList.add('paragraph');
    para.addEventListener('copy', (event) => {
        event.target.style.color = "green";
        event.target.style.backgroundColor = 'gray';
    })
})
body.addEventListener('mousedown', (event) => {
    event.target.style.backgroundColor = "silver";
})

busImg.addEventListener('drag', (event) => {
    event.target.style.border = '5px solid seagreen';
})

let images = document.querySelectorAll("img");
images.forEach((image) => {
    image.addEventListener('dragend', () => {
        image.style.height = '40vh';
        image.style.width = '75%';
    })
})

//Green sock animations
gsap.to(".paragraph", {duration: 2, x: 50, backgroundColor: "aliceblue", borderRadius: "15%", border: "5px solid black"});
