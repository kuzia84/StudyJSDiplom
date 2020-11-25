const headerPhones = () => {
  const headerContacts = document.querySelector(".header-contacts"),
    headerContactsArrow = document.querySelector(".header-contacts__arrow");

  headerContactsArrow.addEventListener("click", () => {
    headerContacts.classList.toggle("open");
  });
};

export default headerPhones;
