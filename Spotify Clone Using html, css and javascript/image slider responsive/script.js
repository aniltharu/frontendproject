const slides= document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide, index) =>{

        slide.style.bottom = "${index * 100}%"
    }
)

const goprev =() =>{
    counter--
    slideimage()
}

const gonext =() =>{
    counter++
    slideimage()
}
const slideimage = () =>{
    slides.forEach(
       (slide) =>{
        slide.style.transform = 'translateY($ {counter * 100} %)'
       } 
    )
}