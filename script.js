gsap.registerPlugin(ScrollTrigger);

// ********* Play video when in viewport ********* //
const headerTl = gsap.timeline();
headerTl.from("header > h2", {
  duration: 2,
  opacity: 0,
  y: -50,
  ease: Power2.easeOut,
  stagger: .7
})
.from("header > strong", {
  duration: 2, 
  opacity: 0,
  ease: Power2.easeOut,
  y: -50
},"-=1.4")
.from("header > h1", {
  duration: 2, 
  opacity: 0,
  ease: Power2.easeOut,
  y: -50
},"-=1.1")
.from("header nav", {
  duration: 2,
  opacity: 0,
  ease: Power2.easeOut,
}, "<")
.from("header > span", {
  duration: 3, 
  opacity: 0,
  ease: Power2.easeOut,
  scale: .9,
  y: 30
})
// ********* Play video when in viewport ********* //

let videos = document.querySelectorAll(".vid")

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: 'top center-=5%',
    end: 'center top',
    onEnter: () => video.play(),
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
  
});