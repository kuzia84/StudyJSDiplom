const designTabs = () => {
  const navListDesigns = document.getElementById("designs-list"),
    btns = document.querySelectorAll(".designs-nav__item_base"),
    sliders = document.querySelectorAll(".designs-slider__container"),
    preview = document.querySelectorAll(".preview-block");

  const removeActive = () => {
    btns.forEach((element) => {
      element.classList.remove("active");
    });
    sliders.forEach((element) => {
      element.classList.remove("active");
    });
    preview.forEach((element) => {
      element.classList.remove("visible");
    });
  };
  const showDesignsSlider = (index) => {
    removeActive();
    btns.forEach((element) => {
      if (element.dataset.designbtn === index) {
        element.classList.add("active");
      }
    });
    sliders.forEach((element) => {
      if (element.dataset.designslider === index) {
        element.classList.add("active");
      }
    });
    preview.forEach((element) => {
      if (element.dataset.designpreview === index) {
        element.classList.add("visible");
      }
    });
  };
  navListDesigns.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".designs-nav__item_base")) {
      const index = target.dataset.designbtn;
      showDesignsSlider(index);
    }
  });
};

export default designTabs;
