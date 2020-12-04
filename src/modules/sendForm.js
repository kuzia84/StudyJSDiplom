const sendForm = (formId) => {
  const errorMessage = "Что-то пошло не так!";
  const successMessage = "Спасибо, мы скоро с вами свяжемся!";
  const form = document.getElementById(formId);
  const statusMessage = document.createElement("div");
  const loadMessage = `
      <div class="sk-wave">
        <div class="sk-rect sk-rect-1"></div>
        <div class="sk-rect sk-rect-2"></div>
        <div class="sk-rect sk-rect-3"></div>
        <div class="sk-rect sk-rect-4"></div>
        <div class="sk-rect sk-rect-5"></div>
      </div>
    `;
  const checkbox = form.querySelector(".checkbox__input");
  const checkboxLabel = form.querySelector(".checkbox__label");

  statusMessage.style.cssText = "font-size: 1rem; color:#f48922";

  const postData = (body) =>
    fetch("./server.php", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

  const showThankModal = () => {
    const thankModal = document.getElementById("popup-thank"),
      closeBtn = thankModal.querySelectorAll(".close"),
      modals = document.querySelectorAll(".popup");
    modals.forEach((element) => {
      element.style.visibility = "hidden";
    });
    thankModal.style.visibility = "visible";
    closeBtn.forEach((element) => {
      element.addEventListener("click", () => {
        thankModal.style.visibility = "hidden";
      });
    });
  };

  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      checkboxLabel.style.backgroundColor = "";
    } else {
      checkboxLabel.style.backgroundColor = "red";
    }
  });

  form.addEventListener("submit", (event) => {
    if (checkbox.checked) {
      event.preventDefault();
      form.insertAdjacentElement("afterend", statusMessage);
      statusMessage.innerHTML = loadMessage;
      const formData = new FormData(form),
        body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });
      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Network stattus not 200");
          }
          statusMessage.innerHTML = "";
          showThankModal();
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
      document.getElementById(formId).reset();
    } else {
      checkboxLabel.style.backgroundColor = "red";
      event.preventDefault();
    }
  });
};

export default sendForm;
