import * as sapper from "@sapper/app";
import AOS from "aos";
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

sapper.start({
  target: document.querySelector("#sapper"),
});
