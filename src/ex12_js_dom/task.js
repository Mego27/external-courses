let arrayImages = ["asset/img-1.jpg", "asset/img-2.jpg", "asset/img-3.jpg", "asset/img-4.jpg", "asset/img-5.jpg", "asset/img-6.jpg", "asset/img-7.jpg", "asset/img-8.jpg" ];
let stateSlider = [0, 1, 2];
function checkStateSlider () {
    for (let index = 0; index < arrayImages.length; index++) {
        for (let j = 0; j < 3; j++) {
            if (document.querySelectorAll("img")[j].src === arrayImages[index]) {
                stateSlider[j] = index;
            }
        }
    }
}
function nextImg() {
    checkStateSlider();
    for (let index = 0; index < stateSlider.length; index++) {
        stateSlider[index]++;
        if (stateSlider[index] > arrayImages.length-1) {
            stateSlider[index] = 0;
        }
    }
    updateImages();
}
function previousImg() {
    checkStateSlider();
    for (let index = 0; index < stateSlider.length; index++) {
        stateSlider[index]--;
        if (stateSlider[index] < 0) {
            stateSlider[index] = arrayImages.length-1;
        }
    }
    updateImages();
}
function updateImages() {
    for (let index = 0; index < 3; index++) {
        document.querySelectorAll("img")[index].setAttribute("class", "animation-image");
    }
    setTimeout(()=>{
        for (let index = 0; index < 3; index++) {
            document.querySelectorAll("img")[index].src = arrayImages[stateSlider[index]];
            document.querySelectorAll("img")[index].removeAttribute("class", "animation-image");
        }
    }, 350)

}
document.getElementById("next").onclick = nextImg;
document.getElementById("previous").onclick = previousImg;