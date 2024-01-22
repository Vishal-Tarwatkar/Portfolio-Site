//text transform animation
//this will help us in a way that we dont have to create html elements manually
//it will automatically get added in those text which has "reveal" class
function revealToSpan() {
   document.querySelectorAll(".reveal").forEach(function (elem) {
      //this code creates two span tags
      let Parent = document.createElement("span");
      let Child = document.createElement("span");

      //this code give both parent and chil span their respective classes
      Parent.classList.add("parent");
      Child.classList.add("child");
      // <span class="parent"></span>
      // <span class="child"></span>

      //span prarent gets child and clid gets elem properties
      //this code give every child content the detail/data of elem
      Child.innerHTML = elem.innerHTML;
      //this line just simply append the child to parent
      Parent.appendChild(Child);
      // <span class="parent"><span class="child"></span></span>

      elem.innerHTML = "";
      elem.appendChild(Parent);
   });
}

function valueSetters() {
   gsap.set(".nav a", { y: "-100%", opacity: 0 });
   gsap.set(".home span .child", { y: "100%" });
   gsap.set(".home .row img", { opacity: 0 });
}

function loaderAnimation() {
   //GSAP Animation
   let tl = gsap.timeline();
   //text sliding(left) animation
   tl.from(".loader .child span", {
      x: 100,
      delay: 0.5,
      stagger: 0.2,
      duration: 1.4,
      ease: Power3.easeInOut,
   });

   //text sliding(up) animation
   tl.to(".loader .parent .child", {
      y: "-100%",
      duration: 1.5,
      delay: 0.2,
      ease: Circ.easeInOut,
   });

   //page sliding animation
   tl.to(".loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
   });

   tl.to(".green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -1,
      ease: Circ.easeInOut,
   });

   tl.to(".green", {
      height: "0%",
      duration: 0.6,
      delay: -0.4,
      ease: Circ.easeInOut,
      onComplete: function () {
         homepageAnimation();
      },
   });
}

function homepageAnimation() {
   let tl = gsap.timeline();

   tl.to(".nav a", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: Expo.easeInOut,
   });
   tl.to(".home .parent .child", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: Expo.easeInOut,
   });
   tl.to(".home .row img", {
      opacity: 1,
      ease: Expo.easeInOut,
   });
}

function locointialize() {
   const scroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
   });
}

function cardhover(){
   document.querySelectorAll(".cnt")
   .forEach(function(cnt){
      let showingImage;

      cnt.addEventListener("mousemove", function(dets){
         document.querySelector(".cursor").children[dets.target.dataset.index].style.opacity = 1;
         showingImage = dets.target;
         document.querySelector(".cursor").children[dets.target.dataset.index].style.transform = `translate(${dets,clientX}px, ${dets.clientY}px)`;
      })

      cnt.addEventListener("mouseleave", function(dets){
         document.querySelector(".cursor").children[showingImage.target.dataset.index].style.opacity = 0;
      })
   })
}

revealToSpan();
valueSetters();
loaderAnimation();
// locointialize();
// cardhover();