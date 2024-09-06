import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const animateFromPosition = (item, options) => {
  gsap.from(item, options);
};

export const animateFromToPosition = (item, from, to) => {
  gsap.fromTo(item, from, to);
};
