let tl = gsap.timeline();

tl
.to(".mainPage", {
   height: 0,
   duration: 2,
   ease: Expo.easeInOut,
});
tl.to(".emptyDiv1", {
   height: "100%",
   duration: 2,
   delay:-2,
   ease: Expo.easeInOut,
});
tl.to(".emptyDiv2", {
   height: "100%",
   duration: 2,
   delay:-1.8,
   ease: Expo.easeInOut,
});
