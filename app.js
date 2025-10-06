const tl = gsap.timeline({
  defaults: { ease: "power4.out", duration: 0.7 },
});
gsap.set("g", {
  autoAlpha: 1,
});
gsap.set("#Frontend", {
  xPercent: -10,
});
gsap.to("svg", {
  scale: 1.2,
  duration: 4,
});
tl.from("#Advanced .st1", {
  yPercent: -100,
  stagger: 0.05,
  skewY: 10,
  skewX: 5,
  scaleY: 0.9,
  opacity: 0,
});
tl.from(
  "#Frontend .st2",
  {
    yPercent: 100,
    stagger: 0.05,
    skewY: 5,
    skewX: 5,
    scaleY: 0.95,
    opacity: 0,
  },
  "-=.7"
)
  .to(
    "#Frontend",
    {
      xPercent: 0,
      ease: "elastic.out(1, .5)",
    },
    "1.3"
  )
  .from(
    "#Arrow .st3",
    {
      xPercent: -107,
      opacity: 0,
      ease: "elastic.out(1, .5)",
    },
    "-=.7"
  )
  .to(
    "#Advanced .st1",
    {
      skewX: 40,
      x: 30,
      scaleX: 0,
      stagger: 0.03,
      opacity: 0,
      duration: 0.3,
    },
    "+=1"
  )
  .to(
    "#Frontend .st2",
    {
      skewX: 40,
      x: 30,
      scaleX: 0,
      stagger: 0.03,
      opacity: 0,
      duration: 0.3,
    },
    "<"
  )
  .to(
    "#Arrow .st3",
    {
      xPercent: 200,
      duration: 0.7,
      ease: "elastic.out(1, .3)",
    },
    "<"
  )
  .to(
    "#Arrow .st3",
    {
      rotateZ: -90,
      duration: 0.7,
      transformOrigin: "center",
    },
    "+=.1"
  )
  .to(
    "#Arrow .st3",
    {
      yPercent: 1000,
      duration: 0.7,
    },
    "+=.5"
  )
  .to(
    "#Arrow .st3",
    {
      yPercent: -3200,
      ease: "back-in(1)",
      duration: 0.8,
    },
    "-=.3"
  )
  .to(
    ".reveal",
    {
      scaleY: 0,
      transformOrigin: "top",
      ease: "power4.inOut",
      duration: 1.2,
    },
    "-=.6"
  );
