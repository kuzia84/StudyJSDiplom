const scrollScreen = () => {
  const menu = document.querySelector(".popup-dialog-menu"),
    buttonFooter = document.querySelector(".button-footer");
  const animateScroll = (scrollToBlock) => {
    window.scrollTo({
      top: scrollToBlock,
      behavior: "smooth",
    });
  };
  menu.addEventListener("click", (event) => {
    const target = event.target,
      scrollTo = document.querySelector(target.getAttribute("href")),
      scrollToBlock = scrollTo.offsetTop;
    animateScroll(scrollToBlock);
    event.preventDefault();
  });

  buttonFooter.addEventListener("click", (e) => {
    e.preventDefault();
    animateScroll(0);
  });
};

export default scrollScreen;
