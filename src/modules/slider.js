const slider = (sliderClass, slideClass, dotContainer, dotClass) => {
  const slider = document.querySelector(sliderClass),
    slide = slider.querySelectorAll(slideClass),
    dots = document.querySelector(dotContainer),
    dot = dots.querySelectorAll(dotClass);
  let currentSlide = 0;

  const prevSlide = (element, index, strClass) => {
    element[index].classList.remove(strClass);
  };
  const nextSlide = (element, index, strClass) => {
    element[index].classList.add(strClass);
  };

  dots.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;

    if (!target.matches(dotClass)) {
      return;
    }

    prevSlide(slide, currentSlide, "slide-active");
    prevSlide(dot, currentSlide, "preview_active");

    if (target.matches(dotClass)) {
      dot.forEach((element, index) => {
        if (element === target) {
          currentSlide = index;
        }
      });
    }
    console.log(currentSlide);

    nextSlide(slide, currentSlide, "slide-active");
    nextSlide(dot, currentSlide, "preview_active");
  });
};

export default slider;
