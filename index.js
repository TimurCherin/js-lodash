const input = document.querySelector(".slider__input");
const inputImg = document.querySelector(".slider__image");
input.addEventListener("change", _.debounce(onChange, 750));
function onChange (e) {
    const currentSize = input.value
    inputImg.style.width = currentSize + "px"
    inputImg.style.height = currentSize + "px"
}
                                                // ex 2
const box = document.querySelector(".box")
document.addEventListener("mousemove", _.debounce(onMove, 200))
function onMove(e) {
    console.dir(box)
    box.style.left = e.clientX - box.clientWidth / 2 + "px"
    box.style.top = e.clientY - box.clientHeight / 2 + "px"
}
// clientX clientY