const toggleMenu = () => {
  const menu = document.querySelector(".popup-dialog-menu"),
    btnMenu = document.querySelector(".menu");

  const menuHandler = () => {
    menu.classList.toggle("active-menu");
  };

  document.body.addEventListener("click", (event) => {
    let target = event.target;
    if (
      target.classList.contains("close-menu") ||
      target.classList.contains("menu-link") ||
      target.parentNode === btnMenu
    ) {
      menuHandler();
    } else {
      target = target.closest(".active-menu");
      if (!target && menu.classList.contains("active-menu")) {
        menuHandler();
      }
    }
  });
};

export default toggleMenu;
