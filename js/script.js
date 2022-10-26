const arrImg = ['assets/img/01.jpg', 'assets/img/02.jpg', 'assets/img/03.jpg', 'assets/img/04.jpg', 'assets/img/05.jpg'];

const btnTop = document.querySelector('.btn-top');
const btnBottom = document.querySelector('.btn-bottom');
const container = document.querySelector('.container');


//this 'for' will cycle 5 times, because there are five img in the array
for (let i = 0; i < arrImg.length; i++) {
    
    const img = document.createElement('img'); //I create a variable img that contais the HTML tag element 'img'
    
    img.src = arrImg[i];
    
    img.classList.add('slider-img');
    
    if (i === 0) //this if will be used only in the first cycle so the container will display at leat something instead of be empty
    {
        img.classList.add('show'); //the class "slider-img" has a d-none value to hide the back pics, 'show' has d-block value, only the first pic in this 'for' will be affected by this
    }
    
    container.append(img); //with this method the current img will be added to the container
    
};




