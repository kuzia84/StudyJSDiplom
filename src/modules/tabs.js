const tabs = () => {
  const tabHeader = document.querySelector("#scheme-list"),
    tab = tabHeader.querySelectorAll(".switch"),
    tabContent = document.querySelectorAll(".scheme-slider__slide");

  const toggleTabContent = (index) => {
    for (let i = 0; i < tabContent.length; i++) {
      if (index === i) {
        tab[i].classList.add("active");
        tabContent[i].classList.add("active");
      } else {
        tab[i].classList.remove("active");
        tabContent[i].classList.remove("active");
      }
    }
  };

  tabHeader.addEventListener("click", (event) => {
    let target = event.target;
    target = target.closest(".switch");

    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          toggleTabContent(i);
        }
      });
    }
  });
};

export default tabs;
