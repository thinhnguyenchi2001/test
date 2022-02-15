window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let positonX = 0;
    let index = 0;
    nextBtn.addEventListener("click",function() {
        handleChangSlider(1);
    });
    prevBtn.addEventListener("click",function() {
        handleChangSlider(-1);
    });

    [...dotItems].forEach((item) => item.addEventListener("click",function(e) {
        [...dotItems].forEach(el => el.classList.remove("active"))
        e.target.classList.add("active");
        const slideIndex = parseInt(e.target.dataset.index);
        index = slideIndex;
        positonX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positonX}px)`;
    })
    
    );

    function handleChangSlider(direction) {
        if(direction === 1) {
            if(index >= sliderLength -1){
                index = sliderLength -1;
                return;
            };
            positonX = positonX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positonX}px)`
            index++;
        } else if (direction === -1) {
            if(index <= 0) {
                index = 0;
                return;
            }
            positonX = positonX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positonX}px)`
            index--;
        }
    }
});