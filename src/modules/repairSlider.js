const repairSlider = () => {
  const navListRepair = document.querySelector(".nav-list-repair"),
    navListSwitchers = navListRepair.querySelectorAll(
      ".repair-types-nav__item"
    ),
    repairTypesInerSliders = document.querySelectorAll(
      ".repair-types-iner-slider"
    );

  const removeActive = () => {
    for (let i = 0; i < navListSwitchers.length; i++) {
      const element = navListSwitchers[i];
      element.classList.remove("active");
    }
    for (let i = 0; i < repairTypesInerSliders.length; i++) {
      const element = repairTypesInerSliders[i];
      element.style.display = "none";
    }
  };

  navListRepair.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches(".repair-types-nav__item")) {
      removeActive();
      target.classList.add("active");
      console.log("target: ", target.dataset.lnk);
      repairTypesInerSliders.forEach((element) => {
        if (target.dataset.lnk === element.dataset.slider) {
          element.style.display = "block";
        }
      });
    }
  });
};
export default repairSlider;
