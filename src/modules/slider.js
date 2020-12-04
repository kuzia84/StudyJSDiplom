const slider = (
  sliderClass,
  slideClass,
  dotContainer,
  dotClass,
  arrowLeft,
  arrowRight,
  arrowClass,
  counterCurrent,
  counterMax
) => {
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
  const changeCounter = () => {
    slider.querySelector(counterCurrent).innerHTML = currentSlide + 1;
    slider.querySelector(counterMax).innerHTML = slide.length;
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

    nextSlide(slide, currentSlide, "slide-active");
    nextSlide(dot, currentSlide, "preview_active");
  });

  slider.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;

    if (!target.matches(arrowClass)) {
      return;
    }

    prevSlide(slide, currentSlide, "slide-active");

    if (target.matches(arrowRight)) {
      currentSlide++;
    } else if (target.matches(arrowLeft)) {
      currentSlide--;
    }

    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }
    changeCounter();
    nextSlide(slide, currentSlide, "slide-active");
  });
};

export default slider;
