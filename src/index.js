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
tooltip();
/*//Send ajax from
sendForm("feedback1");
sendForm("feedback2");
sendForm("feedback3");
sendForm("feedback4");
sendForm("feedback5");
sendForm("feedback6");
//Tabs
tabs();
//Slider
// slider();
const carousel = new SliderCarousel({
  main: ".portfolio-wrapper",
  wrap: ".portfolio-content",
  prev: "#arrow-left",
  next: "#arrow-right",
  slidesToShow: 1,
  infinity: true,
});
carousel.init();


*/
