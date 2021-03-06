class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    pagination = false,
    paginationStyle = "white",
    paginationResponsive = false,
    responsive = [],
    adaptiveWidth = false,
    addClassActive = false,
  }) {
    if (!main || !wrap) {
      console.warn('slider-carousel: Необходима 2 свойства, "main" и "wrap"!');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
    this.pagination = pagination;
    this.paginationStyle = paginationStyle;
    this.paginationResponsive = paginationResponsive;
    this.adaptiveWidth = adaptiveWidth;
    this.addClassActive = addClassActive;
  }

  init() {
    this.addGloClass();
    this.addStyle();

    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }

    if (this.responsive) {
      this.responsInit();
    }

    if (this.pagination) {
      this.addPagination();
    }
  }

  responsInit() {
    const slidesToShowDefault = this.slidesToShow,
      allResponse = this.responsive.map((item) => item.breakpoint),
      maxResponse = Math.max(...allResponse);

    const checkResponse = () => {
      const windowWidth = document.documentElement.clientWidth;
      if (windowWidth < maxResponse) {
        for (let i = 0; i < allResponse.length; i++) {
          if (windowWidth < allResponse[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.options.maxPosition = this.slides.length - this.slidesToShow;
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.options.maxPosition = this.slides.length - this.slidesToShow;
        this.addStyle();
      }
    };
    checkResponse();

    window.addEventListener("resize", checkResponse);
  }

  destroy() {
    this.main.classList.remove("glo-slider");
    this.wrap.classList.remove("glo-slider__wrap");
    for (const item of this.slides) {
      item.classList.remove("glo-slider__item");
    }
  }

  addGloClass() {
    this.main.classList.add("glo-slider");
    this.wrap.classList.add("glo-slider__wrap");
    for (const item of this.slides) {
      item.classList.add("glo-slider__item");
    }
  }

  addStyle() {
    let style = document.getElementById(
      `${this.main.classList[0]}-sliderCarousel-style`
    );
    if (!style) {
      style = document.createElement("style");
      style.id = `${this.main.classList[0]}-sliderCarousel-style`;
    }
    style.textContent = `
      .${this.main.classList[0]}.glo-slider {
          overflow:hidden;
      }
      .${this.main.classList[0]} .glo-slider__wrap {
          display: flex !important;
          
          flex-wrap: nowrap;
          transition: transform 0.5s;
          will-change: transform;
      }
      .${this.main.classList[0]} .glo-slider__item {
          flex: 0 0 ${
            this.adaptiveWidth ? "auto" : this.options.widthSlide + "%"
          };
          margin: 0 auto;
      }
    `;
    document.head.append(style);
  }

  controlSlider() {
    this.prev.addEventListener("click", this.prevSlider.bind(this));
    this.next.addEventListener("click", this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;

      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }
      if (this.adaptiveWidth) {
        // this.wrap.style.transform = `translateX(-${
        //   (100 / this.options.maxPosition) * (this.options.position / 1.28)
        // }%)`;
        this.wrap.style.transform = `translateX(-${
          ((this.wrap.clientWidth - this.main.clientWidth) /
            this.options.maxPosition) *
          this.options.position
        }px)`;
      } else {
        this.wrap.style.transform = `translateX(-${
          this.options.position * this.options.widthSlide
        }%)`;
      }

      if (this.addClassActive) {
        this.addActiveClass();
      }

      if (this.pagination) {
        this.sliderPaginationChange();
      }
    }
    if (this.options.infinity === false) {
      this.next.style.display = "flex";
      if (this.options.position === 0) {
        this.prev.style.display = "none";
      }
    }
  }

  nextSlider() {
    if (
      this.options.infinity ||
      this.options.position < this.slides.length - this.slidesToShow
    ) {
      ++this.options.position;

      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }

      if (this.adaptiveWidth) {
        this.wrap.style.transform = `translateX(-${
          ((this.wrap.clientWidth - this.main.clientWidth) /
            this.options.maxPosition) *
          this.options.position
        }px)`;
      } else {
        this.wrap.style.transform = `translateX(-${
          this.options.position * this.options.widthSlide
        }%)`;
      }

      if (this.addClassActive) {
        this.addActiveClass();
      }

      if (this.pagination) {
        this.sliderPaginationChange();
      }
    }
    if (this.options.infinity === false) {
      this.prev.style.display = "flex";
      if (this.options.position === this.slides.length - this.slidesToShow) {
        this.next.style.display = "none";
      }
    }
  }

  addActiveClass() {
    for (let i = 0; i < this.slides.length; i++) {
      const element = this.slides[i];
      element.classList.remove("active-item");

      if (i === this.options.position) {
        element.classList.add("active-item");
      }
    }
  }

  addArrow() {
    this.prev = document.createElement("button");
    this.next = document.createElement("button");

    this.prev.className = "slider-arrow slider-arrow_left";
    this.next.className = "slider-arrow slider-arrow_right";

    this.prev.id = `.${this.main.classList[0]}-arrow_left`;
    this.next.id = `.${this.main.classList[0]}-arrow_right`;

    this.main.append(this.prev);
    this.main.append(this.next);

    const style = document.createElement("style");
    style.textContent = `
        .glo-slider__prev, .glo-slider__next {
            margin: 0 10px;
            border: 20px solid transparent;
            background: transparent;
        }
        .glo-slider__next {
            border-left-color: blue;
        }
        .glo-slider__prev {
            border-right-color: blue;
        }
        .glo-slider__next:hover,
        .glo-slider__prev:hover,
        .glo-slider__next:focus,
        .glo-slider__prev:focus {
            background: transparent;
            outline: transparent;
        }
    `;
    document.head.append(style);
  }

  addPagination() {
    const currentPaginationItem = document.getElementById(
      `${this.main.classList[0]}-counter`
    );
    if (currentPaginationItem) {
      return;
    }
    const sliderPagination = document.createElement("div");
    sliderPagination.classList.add("slider-counter");

    if (this.paginationResponsive) {
      sliderPagination.classList.add("slider-counter-responsive");
    }

    sliderPagination.id = `${this.main.classList[0]}-counter`;
    sliderPagination.innerHTML = `    
      <div class="slider-counter-content">
        <div class="slider-counter-content__current">
          1
        </div>
        <div class="slider-counter-content__total">${this.slides.length}</div>
      </div>    
    `;
    if (this.paginationStyle === "dark") {
      sliderPagination.classList.add("slider-counter_dark");
    }
    this.main.append(sliderPagination);
  }

  sliderPaginationChange() {
    const currentPaginationItem = document.getElementById(
      `${this.main.classList[0]}-counter`
    );
    currentPaginationItem.querySelector(
      ".slider-counter-content__current"
    ).innerHTML = this.options.position + 1;
  }
}

export default SliderCarousel;
