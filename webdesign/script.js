var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: "true",
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%",
    width:"30%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"170%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    left:"70%",
    rotate:"130deg",
    width:"10%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')