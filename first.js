const buttons = document.querySelectorAll('.button');
 console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (b) {
    b.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "black") {
            body.style.backgroundColor = e.target.id;
        } 
        if (e.target.id === "gray") {
            body.style.backgroundColor = e.target.id;
        }  
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        } 
        if (e.target.id === "white") {
            body.style.backgroundColor =  e.target.id; 
        }
    })
});