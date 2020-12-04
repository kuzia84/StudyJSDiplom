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
import repairSlider from "./modules/repairSlider";
import designTabs from "./modules/designTabs";
import popupDesign from "./modules/popupDesign";
import popupRepairTypesContent from "./modules/popupRepairTypesContent";
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

const docsSliderPopupToggler = document.querySelectorAll(
  ".transparency-item__img"
);
for (let i = 0; i < docsSliderPopupToggler.length; i++) {
  docsSliderPopupToggler[i].addEventListener("click", () => {
    const docsSliderPopup = new SliderCarousel({
      main: ".popup-transparency-slider",
      wrap: ".popup-transparency-slider-wrapper",
      prev: "#transparency_left",
      next: "#transparency_right",
      position: i - 1,
      slidesToShow: 1,
      infinity: true,
      pagination: true,
      paginationStyle: "dark",
    });

    docsSliderPopup.init();
    docsSliderPopup.nextSlider();
  });
}

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
      breakpoint: 768,
      slidesToShow: 2,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
    },
  ],
});
partners.init();
const problemsSlider = new SliderCarousel({
  main: ".problems-slider-wrap",
  wrap: ".problems-slider",
  prev: "#problems-arrow_left",
  next: "#problems-arrow_right",
  slidesToShow: 1,
  infinity: true,
  addClassActive: true,
});
const tooltipSlider = new SliderCarousel({
  main: ".formula-slider-wrap",
  wrap: ".formula-slider",
  prev: "#formula-arrow_left",
  next: "#formula-arrow_right",
  slidesToShow: 1,
  infinity: true,
  addClassActive: true,
});
const repairSliderNav = new SliderCarousel({
  main: ".repair-types-nav",
  wrap: ".nav-list-repair",
  prev: "#nav-arrow-repair-left_base",
  next: "#nav-arrow-repair-right_base",
  slidesToShow: 1,
  infinity: true,
  adaptiveWidth: true,
});
const tabSliderNav = new SliderCarousel({
  main: ".scheme-nav-slider",
  wrap: ".scheme-nav-slider-wrapper",
  prev: "#nav-arrow-scheme_left",
  next: "#nav-arrow-scheme_right",
  slidesToShow: 1,
  infinity: true,
  adaptiveWidth: true,
});

repairSlider();
const repairSlider1 = new SliderCarousel({
  main: ".types-repair1",
  wrap: ".repair-types-iner-slider-wrapper1",
  slidesToShow: 1,
  pagination: true,
});
repairSlider1.init();
const repairSlider2 = new SliderCarousel({
  main: ".types-repair2",
  wrap: ".repair-types-iner-slider-wrapper2",
  slidesToShow: 1,
  pagination: true,
});
repairSlider2.init();
const repairSlider3 = new SliderCarousel({
  main: ".types-repair3",
  wrap: ".repair-types-iner-slider-wrapper3",
  slidesToShow: 1,
  pagination: true,
});
repairSlider3.init();
const repairSlider4 = new SliderCarousel({
  main: ".types-repair4",
  wrap: ".repair-types-iner-slider-wrapper4",
  slidesToShow: 1,
  pagination: true,
});
repairSlider4.init();
const repairSlider5 = new SliderCarousel({
  main: ".types-repair5",
  wrap: ".repair-types-iner-slider-wrapper5",
  slidesToShow: 1,
  pagination: true,
});
repairSlider5.init();

const portfolioSliderDesctop = new SliderCarousel({
  main: ".portfolio-slider-container",
  wrap: ".portfolio-slider-wrapper",
  prev: "#portfolio-arrow_left",
  next: "#portfolio-arrow_right",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1025,
      slidesToShow: 2,
    },
    {
      breakpoint: 901,
      slidesToShow: 1,
    },
  ],
});
portfolioSliderDesctop.init();
const portfolioSliderMob = new SliderCarousel({
  main: ".portfolio-mob-slider-container",
  wrap: ".portfolio-mob-slider-wrapper",
  prev: "#portfolio-arrow-mobile_left",
  next: "#portfolio-arrow-mobile_right",
  slidesToShow: 1,
  pagination: true,
  paginationResponsive: true,
});
portfolioSliderMob.init();

const portfolioSliderPopupToggler = document.querySelectorAll(
  ".portfolio-slider__toggler"
);
for (let i = 0; i < portfolioSliderPopupToggler.length; i++) {
  portfolioSliderPopupToggler[i].addEventListener("click", () => {
    const portfolioSliderPopup = new SliderCarousel({
      main: ".popup-portfolio-slider__container",
      wrap: ".popup-portfolio-slider__wrapper",
      prev: "#popup_portfolio_left",
      next: "#popup_portfolio_right",
      position: i - 1,
      slidesToShow: 1,
      infinity: true,
      pagination: true,
    });

    portfolioSliderPopup.init();
    portfolioSliderPopup.nextSlider();
  });
}
//Tabs
tabs();

const popupDesignSlider1 = new SliderCarousel({
  main: ".popup-designs-slider__style1",
  wrap: ".popup-designs-slider__style1-wrapper",
  prev: "#popup_design_left1",
  next: "#popup_design_right1",
  slidesToShow: 1,
  pagination: true,
  paginationResponsive: true,
});
popupDesignSlider1.init();

const popupDesignSlider2 = new SliderCarousel({
  main: ".popup-designs-slider__style2",
  wrap: ".popup-designs-slider__style2-wrapper",
  prev: "#popup_design_left2",
  next: "#popup_design_right2",
  slidesToShow: 1,
  pagination: true,
  paginationResponsive: true,
});
popupDesignSlider2.init();

const popupDesignSlider3 = new SliderCarousel({
  main: ".popup-designs-slider__style3",
  wrap: ".popup-designs-slider__style3-wrapper",
  prev: "#popup_design_left3",
  next: "#popup_design_right3",
  slidesToShow: 1,
  pagination: true,
  paginationResponsive: true,
});
popupDesignSlider3.init();

const popupDesignSlider4 = new SliderCarousel({
  main: ".popup-designs-slider__style4",
  wrap: ".popup-designs-slider__style4-wrapper",
  prev: "#popup_design_left4",
  next: "#popup_design_right4",
  slidesToShow: 1,
  pagination: true,
  paginationResponsive: true,
});
popupDesignSlider4.init();

const popupDesignSlider5 = new SliderCarousel({
  main: ".popup-designs-slider__style5",
  wrap: ".popup-designs-slider__style5-wrapper",
  prev: "#popup_design_left5",
  next: "#popup_design_right5",
  slidesToShow: 1,
  pagination: true,
  paginationResponsive: true,
});
popupDesignSlider5.init();

popupDesign();

const popupDesignNav = new SliderCarousel({
  main: "#nav-list-popup",
  wrap: "#nav-list-popup-designs",
  prev: "#nav-arrow-popup-designs_left",
  next: "#nav-arrow-popup-designs_right",
  slidesToShow: 1,
  infinity: true,
  adaptiveWidth: true,
});

const designNav = new SliderCarousel({
  main: "#designs-list-container",
  wrap: "#designs-list",
  prev: "#nav-arrow-designs_left",
  next: "#nav-arrow-designs_right",
  slidesToShow: 1,
  infinity: true,
  adaptiveWidth: true,
});
designTabs();
slider(
  ".designs-slider__style1",
  ".scand",
  ".scand-preview-block",
  ".scand",
  "#design_left1",
  "#design_right1",
  ".slider-arrow-tablet-mobile",
  ".slider-counter-content__current",
  ".slider-counter-content__total"
);
slider(
  ".designs-slider__style2",
  ".trad",
  ".trad-preview-block",
  ".trad",
  "#design_left2",
  "#design_right2",
  ".slider-arrow-tablet-mobile",
  ".slider-counter-content__current",
  ".slider-counter-content__total"
);
slider(
  ".designs-slider__style3",
  ".loft",
  ".loft-preview-block",
  ".loft",
  "#design_left3",
  "#design_right3",
  ".slider-arrow-tablet-mobile",
  ".slider-counter-content__current",
  ".slider-counter-content__total"
);
slider(
  ".designs-slider__style4",
  ".minimal",
  ".minimal-preview-block",
  ".minimal",
  "#design_left4",
  "#design_right4",
  ".slider-arrow-tablet-mobile",
  ".slider-counter-content__current",
  ".slider-counter-content__total"
);
slider(
  ".designs-slider__style5",
  ".modern",
  ".modern-preview-block",
  ".modern",
  "#design_left5",
  "#design_right5",
  ".slider-arrow-tablet-mobile",
  ".slider-counter-content__current",
  ".slider-counter-content__total"
);
//список цен и услуг
slider(
  ".popup-repair-types-content-table",
  ".popup-repair-types-content-table__list",
  ".nav-list-popup-repair",
  ".popup-repair-types-nav__item"
);
popupRepairTypesContent();
const popupRepairTypesNav = new SliderCarousel({
  main: ".nav-popup-repair-types",
  wrap: ".nav-list-popup-repair",
  prev: "#nav-arrow-popup-repair_left",
  next: "#nav-arrow-popup-repair_right",
  slidesToShow: 1,
  infinity: true,
  adaptiveWidth: true,
});
//Send ajax from
sendForm("feedback1");
sendForm("feedback2");
sendForm("feedback3");
sendForm("feedback4");
sendForm("feedback5");
sendForm("feedback6");

if (document.documentElement.clientWidth < 1025) {
  problemsSlider.init();
  tooltipSlider.init();
  repairSliderNav.init();
  tabSliderNav.init();
  popupDesignNav.init();
  designNav.init();
  popupRepairTypesNav.init();
}
window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 1025) {
    problemsSlider.init();
    tooltipSlider.init();
    repairSliderNav.init();
    tabSliderNav.init();
    popupDesignNav.init();
    designNav.init();
    popupRepairTypesNav.init();
  }
  if (document.documentElement.clientWidth > 1024) {
    popupRepairTypesNav.destroy();
  }
});
