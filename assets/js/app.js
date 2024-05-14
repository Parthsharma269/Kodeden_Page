// NavBar

const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".smView");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    document.querySelector("nav").classList.toggle("nav-bg");
    document.querySelector("body").classList.toggle("overflow-hidden");
})

// Back-to-top

let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 755 || document.documentElement.scrollTop > 755) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Slick-slider

$('.Slick-slider').slick({
    speed: 555,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 550,
            settings: {
                dots: false,
                arrows: false,
                infinite: true,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 450,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});