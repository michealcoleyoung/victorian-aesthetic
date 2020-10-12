// checks size of window
window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 500px)").matches) {
        console.log("Screen width is at least 500px")
    } else {
        console.log("Screen less than 500px")
    }
})

// turns off automatic slide
$('.carousel').carousel({
    interval: false,
});

// window.onload = function setColor() {
//     let carouselItems = document.getElementsByClassName('carousel-item');
//     for (let item of carouselItems) {
//         item.body.style.backgroundBlendMode = "luminosity";
//         // item.body.style.setColor = "blue";
//     }

// }