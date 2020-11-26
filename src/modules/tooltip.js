const tooltip = (selector) => {
  const wrapper = document.querySelector(selector);

  wrapper.addEventListener(
    "mouseover",
    (event) => {
      let target = event.target;

      if (target.matches(".tooltip-toggler")) {
        target = target.closest(".item-with-tooltip");
        target.classList.add("active-item");
        const popup = target.querySelector(".popup-tooltip"),
          scrollTop = popup.getBoundingClientRect().top,
          row = target.closest(".row");

        if (scrollTop < 0) {
          popup.classList.add("popup-tooltip-reverse");
          row.style.zIndex = 1;
        }
      }
    },
    false
  );
  wrapper.addEventListener("mouseout", (event) => {
    let target = event.target;

    if (target.matches(".tooltip-toggler")) {
      target = target.closest(".item-with-tooltip");
      target.classList.remove("active-item");
      const popup = target.querySelector(".popup-tooltip"),
        row = target.closest(".row");
      popup.classList.remove("popup-tooltip-reverse");
      row.style.zIndex = "";
    }
  });
};

export default tooltip;
