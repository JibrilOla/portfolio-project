const circles = document.querySelectorAll('img');
console.log(circles);
const numbr = document.getElementById('ld')
console.log(numbr);
// circles.addEventListener('click', changeBackgroundColor);



circles.forEach( function (element) {
    element.addEventListener('click', () =>{
        document.body.style.backgroundColor = element.style.backgroundColor;
    });
})
circles.forEach( function (element) {
    element.addEventListener('click', () =>{
        document.body.style.color = element.style.color;
    });
})


