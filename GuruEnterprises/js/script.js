// Image Slider  

const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const fifth = document.querySelector('#fifth');
const sliderImage = document.querySelector('#sliderImage');

let images = [
    {
        path: "images/sliderImg1.jpg"
    },
    {
        path: "images/sliderImg2.jpg"
    },
    {
        path: "images/sliderImg3.jpg"
    },
    {
        path: "images/sliderImg4.jpg"
    },
    {
        path: "images/sliderImg5.jpg"
    }
];



let indexNo = 0;
let count = 0;

const loadImage = (indexNo) => {

    if(indexNo < images.length) {
    sliderImage.src = images[indexNo].path;
    if(indexNo === 0) {
        first.style.backgroundColor = "purple";
    }
    else {
        first.style.backgroundColor = "rgb(243, 177, 177)";
    }
    if(indexNo === 1) {
        second.style.backgroundColor = "purple";
    }
    else {
        second.style.backgroundColor = "rgb(243, 177, 177)";
    } 
    if(indexNo === 2) {
        third.style.backgroundColor = "purple";
    }
    else {
        third.style.backgroundColor = "rgb(243, 177, 177)";
    }
    if(indexNo === 3) {
        fourth.style.backgroundColor = "purple";
    }
    else {
        fourth.style.backgroundColor = "rgb(243, 177, 177)";
    }
    if(indexNo === 4) {
        fifth.style.backgroundColor = "purple";
    }
    else {
        fifth.style.backgroundColor = "rgb(243, 177, 177)";
    }  
}
else {
    indexNo = 0;
} 

};


setInterval(() => {
    if (indexNo < images.length) {
        indexNo = indexNo + 1;
        loadImage(indexNo);
    }
    else {
        indexNo = 0;
        loadImage(indexNo);

    }
}, 3000);



first.addEventListener('click', () => {
    if (count === 0) {
        sliderImage.src = 'images/sliderImg1.jpg';

        count = 1;
    }
    else {
        first.style.backgroundColor = "rgb(243, 177, 177)";
        count = 0;
    }
});

second.addEventListener('click', () => {
    if (count === 0) {
        sliderImage.src = 'images/sliderImg2.jpg';

        count = 1;
    }
    else {
        second.style.backgroundColor = "rgb(243, 177, 177)";
        count = 0;
    }
});
third.addEventListener('click', () => {
    if (count === 0) {
        sliderImage.src = 'images/sliderImg3.jpg';
        count = 1;
    }
    else {
        third.style.backgroundColor = "rgb(243, 177, 177)";
        count = 0;
    }
});
fourth.addEventListener('click', () => {
    if (count === 0) {
        sliderImage.src = 'images/sliderImg4.jpg';
        count = 1;
    }
    else {
        fourth.style.backgroundColor = "rgb(243, 177, 177)";
        count = 0;
    }
});

fifth.addEventListener('click', () => {
    if (count === 0) {
        sliderImage.src = 'images/sliderImg5.jpg';
        count = 1;
    }
    else {
        fifth.style.backgroundColor = "rgb(243, 177, 177)";
        count = 0;
    }
});














