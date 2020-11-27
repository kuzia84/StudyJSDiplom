const togglePopup = () => {
  const popupBtns = document.querySelectorAll('[data-toggle="modal"]');

  popupBtns.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target;
      let modalName;
      if (target.getAttribute("href")) {
        modalName = target.getAttribute("href");
      } else {
        modalName = target.dataset.href;
      }
      const modal = document.querySelector(modalName),
        closeBtn = modal.querySelector(".close");

      modal.style.visibility = "visible";
      closeBtn.addEventListener("click", () => {
        modal.style.visibility = "hidden";
      });
    });
  });
};

export default togglePopup;
