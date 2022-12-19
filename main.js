(function () {

    let carouselContent = document.querySelector('#carouselContent');
    let carouselLeftBtn = document.querySelector('#carouselLeftBtn');
    let carouselRightBtn = document.querySelector('#carouselRightBtn');

    let carouselLeftValue = 0;
    let totalWidth = carouselContent.getBoundingClientRect().width;
    let widthToMove = 180 + 16 + 180 + 16;
    let arrowBtnWidth = 50;
    let noOfSlides = totalWidth / widthToMove;
    let currentSlide = 1;

    carouselLeftBtn.addEventListener('click', moveCarouselRight)

    carouselRightBtn.addEventListener('click', moveCarouselLeft)

    manageButtons();

    function moveCarouselLeft() {
        if (currentSlide == 1) carouselLeftValue -= widthToMove - arrowBtnWidth;

        else carouselLeftValue -= widthToMove - arrowBtnWidth;

        currentSlide++;
        manageButtons();

        carouselContent.style.left = `${carouselLeftValue}px`
    }

    function moveCarouselRight () {
        if (currentSlide == 2) carouselLeftValue = 8;

        else carouselLeftValue += widthToMove;

        currentSlide--;
        manageButtons();

        carouselContent.style.left = `${carouselLeftValue}px`
    }

    function manageButtons() {
        if (currentSlide == noOfSlides - 1) carouselRightBtn.classList.remove("show");

        else
        carouselRightBtn.classList.add("show")

        if (currentSlide == 1)
        carouselLeftBtn.classList.remove("show");

        else {
            carouselLeftBtn.classList.add("show");
        }
    }

} () )