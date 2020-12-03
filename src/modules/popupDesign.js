const popupDesign = () => {
  const navListPopupDesigns = document.getElementById("nav-list-popup-designs"),
    btns = document.querySelectorAll(".designs-nav__item_popup"),
    sliders = document.querySelectorAll(".popup-designs-slider__container"),
    txts = document.querySelectorAll(".popup-design-text");

  const removeActive = () => {
    btns.forEach((element) => {
      element.classList.remove("active");
    });
    sliders.forEach((element) => {
      element.classList.remove("active");
    });
    txts.forEach((element) => {
      element.classList.remove("visible-content-block");
    });
  };
  const showPopupDesignsSlider = (index) => {
    removeActive();
    btns.forEach((element) => {
      if (element.dataset.popupdesignbtn === index) {
        element.classList.add("active");
      }
    });
    sliders.forEach((element) => {
      if (element.dataset.popupdesignslider === index) {
        element.classList.add("active");
      }
    });
    txts.forEach((element) => {
      if (element.dataset.popupdesigntext === index) {
        element.classList.add("visible-content-block");
      }
    });
  };
  navListPopupDesigns.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".designs-nav__item_popup")) {
      const index = target.dataset.popupdesignbtn;
      showPopupDesignsSlider(index);
    }
  });
};

export default popupDesign;
