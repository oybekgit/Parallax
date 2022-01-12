// header start 

let cloud = [...document.querySelectorAll('.cloud')]
let boat = document.querySelector('.boat')
let fantasy = document.querySelector('.fantasy')

window.addEventListener("scroll", () => {

    let windowY = this.scrollY
    fantasy.style.objectPosition = `0 ${windowY / 10}%`
    const boatSpeed = boat.getAttribute('data-speed')
    boat.style.transform = `translateX(${(windowY * boatSpeed)/10}px)`

    cloud.forEach(clouds => {

        const speed = clouds.getAttribute('data-speed')
        clouds.style.transform = `translateX(${(windowY * speed) / 5}px)`

    });
})

let h1 = document.querySelector('.header__title')

let txt = h1.innerHTML
h1.innerHTML = ''

function str(i = 0) {
    h1.innerHTML += txt[i]
    i++
    if (i < txt.length) {
        setTimeout(() => {
            str(i)
        }, 100);
    }

}

str()
// header end


// section start 

let box = document.querySelector('.parallax__box');
let ball = box.querySelectorAll('.parallax__ball');

box.addEventListener('mousemove', (e) => {
    
    // console.log(e.pageX);
    
    ball.forEach(balls => {
        const speed = balls.getAttribute('data-speed')
        
        const x = (window.innerWidth - e.pageX * speed) / 70
        const y = (window.innerHeight - e.pageY * speed) / 70
        
        balls.style.transform = `translate(${x}px, ${y}px)`
        
    });
    
})


// section end