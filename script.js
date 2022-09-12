gsap.from('.header', {
    duration: 1,
    y: '-100%',
    ease: 'bounce'
}) // ends at base position specified in html

gsap.from('.link', {
    duration: 2,
    opacity: 0,
    delay: 1, // allows us to let the animation begin when the header is completely finished
    stagger: .5
})

gsap.from('.right', {
    duration: 2,
    x: '+100%',
    delay: 1,
    ease: 'power2.in'
})

gsap.from('.left', {
    duration: 2,
    delay: 1,
    x: '-100%',
    ease: 'power2.in'
})

gsap.to('.footer', {
    duration: 1,
    y: 0,
    ease: 'elastic',
    delay: 2.5
}) // starts from the base position specified in html

gsap.fromTo('.button',
    {
        opacity: 0,
        scale: 0,
        rotation: 720
    },
    {
        duration: 1,
        delay: 3.5,
        opacity: 100,
        scale: 1,
        rotation: 0
    }) // dont have to worry about any default styles

