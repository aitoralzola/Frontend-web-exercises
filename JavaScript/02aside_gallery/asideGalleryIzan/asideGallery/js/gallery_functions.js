window.onload = () => {
    let aside = document.querySelector("aside");
    let images = aside.querySelectorAll("img");
    addEventListeners(images);
};


const displayImage = e => {
    let canvas = document.getElementById('image');
    let targetImg =  e.target;

    canvas.setAttribute('style', `background-image: url(${targetImg.getAttribute('src')})`);
};

const addEventListeners = images => {
    images.forEach(element => {
        element.addEventListener("mouseover", displayImage);
    });
};