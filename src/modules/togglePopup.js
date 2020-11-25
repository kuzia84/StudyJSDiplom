const togglePopup = () => {
  const popupBtns = document.querySelectorAll('[data-toggle="modal"]');

  popupBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target,
        modalName = target.getAttribute("href"),
        modal = document.querySelector(modalName),
        closeBtn = modal.querySelector(".close");

      modal.style.visibility = "visible";
      closeBtn.addEventListener("click", () => {
        modal.style.visibility = "hidden";
      });
    });
  });
};

export default togglePopup;
