"use strict";

import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";
import polyfill from "cross-browser-polyfill";
polyfill();

import headerPhones from "./modules/headerPhones";
import toggleMenu from "./modules/toggleMenu";
import togglePopup from "./modules/togglePopup";
import scrollScreen from "./modules/scrollScreen";
import maskPhone from "./modules/maskPhone";
import tooltip from "./modules/tooltip";
import accordion from "./modules/accordion";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import SliderCarousel from "./modules/slider2";
import sendForm from "./modules/sendForm";

//Header Phones
headerPhones();
//Menu
toggleMenu();
//ScrollScreen
scrollScreen();
//TogglePopup
togglePopup();
//Mask phone
maskPhone(".masked-phone");
//Tooltips
tooltip(".formula .wrapper_small.mobile-hide.tablet-hide");
tooltip(".problems .wrapper_middle.mobile-hide.tablet-hide");
//Accordion
accordion();
//Slider
const docsSlider = new SliderCarousel({
  main: ".transparency-slider-wrap",
  wrap: ".transparency-slider",
  prev: "#transparency-arrow_left",
  next: "#transparency-arrow_right",
  slidesToShow: 3,
  infinity: true,
  responsive: [
    {
      breakpoint: 1025,
      slidesToShow: 1,
    },
  ],
});
docsSlider.init();

const docsSliderPopup = new SliderCarousel({
  main: ".popup-transparency-slider",
  wrap: ".popup-transparency-slider-wrapper",
  prev: "#transparency_left",
  next: "#transparency_right",
  slidesToShow: 1,
  infinity: true,
});
document.querySelectorAll(".transparency-item__img").forEach((element) => {
  element.addEventListener("click", () => {
    docsSliderPopup.init();
  });
});

const reviews = new SliderCarousel({
  main: ".reviews-slider",
  wrap: ".reviews-slider-wrapper",
  prev: "#reviews-arrow_left",
  next: "#reviews-arrow_right",
  slidesToShow: 1,
  infinity: true,
});
reviews.init();

const partners = new SliderCarousel({
  main: ".partners-slider",
  wrap: ".partners-slider-wrapper",
  prev: "#partners-arrow_left",
  next: "#partners-arrow_right",
  slidesToShow: 3,
  infinity: true,
  responsive: [
    {
      breakpoint: 480,
      slidesToShow: 1,
    },
  ],
});
partners.init();

/*
//Send ajax from
sendForm("feedback1");
sendForm("feedback2");
sendForm("feedback3");
sendForm("feedback4");
sendForm("feedback5");
sendForm("feedback6");
//Tabs
tabs();

*/
