const popupRepairTypesContent = () => {
  const btns = document.querySelector(".nav-list-popup-repair"),
    tit = document.getElementById("switch-inner");

  btns.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".popup-repair-types-nav__item")) {
      tit.innerHTML = target.innerHTML;
    }
  });
};
export default popupRepairTypesContent;
