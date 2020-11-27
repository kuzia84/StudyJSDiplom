const accordion = () => {
  const accordionWrapper = document.querySelector(".accordion");
  const toggleAccordionItem = (target) => {
    const accordionItems = accordionWrapper.querySelectorAll("h2");
    accordionItems.forEach((element) => {
      element.classList.remove("msg-active");
    });
    target.classList.toggle("msg-active");
  };
  accordionWrapper.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches(".title_block")) {
      toggleAccordionItem(target);
    }
  });
};

export default accordion;
