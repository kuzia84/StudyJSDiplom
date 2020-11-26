const tooltip = () => {
  const wrapper = document.querySelector(
    ".formula .wrapper_small.mobile-hide.tablet-hide"
  );

  wrapper.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (target.matches(".formula-item__icon-inner-text")) {
      target = target.closest(".formula-item__icon");
      target.classList.add("active-item");
      const popup = target.querySelector(".formula-item-popup"),
        scrollTop = popup.getBoundingClientRect().top,
        row = target.closest(".row");

      if (scrollTop < 0) {
        popup.classList.add("formula-item-popup-reverse");
        row.style.zIndex = 1;
      }
    }
  });
  wrapper.addEventListener("mouseout", (event) => {
    let target = event.target;

    if (target.matches(".formula-item__icon-inner-text")) {
      target = target.closest(".formula-item__icon");
      target.classList.remove("active-item");
      const popup = target.querySelector(".formula-item-popup"),
        row = target.closest(".row");
      popup.classList.remove("formula-item-popup-reverse");
      row.style.zIndex = "";
    }
  });
};

export default tooltip;
