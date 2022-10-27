const arrImg = ['assets/img/01.jpg', 'assets/img/02.jpg', 'assets/img/03.jpg', 'assets/img/04.jpg', 'assets/img/05.jpg'];
const btnTop = document.querySelector('.btn-top');
const btnBottom = document.querySelector('.btn-bottom');
const container = document.querySelector('.container');


//this 'for' will cycle 5 times, because there are five img in the array
for (let i = 0; i < arrImg.length; i++) {
    
   const imgE = document.createElement('img'); //I create a variable img that contais the HTML tag element 'img'
    
    imgE.src = arrImg[i];
    
    imgE.classList.add('slider-img');
    
    if (i === 0) //this if will be used only in the first cycle so the container will display at leat something instead of be empty
    {
        imgE.classList.add('show'); //the class "slider-img" has a d-none value to hide the back pics, 'show' has d-block value, only the first pic in this 'for' will be affected by this
    }
    
    container.append(imgE); //with this method the current img will be added to the container
    
};

//now we are going to select all the images we have created and we will put them into a varable that we will call 'imgList'
const imgList = document.querySelectorAll('.slider-img');


let i = 0; //counter

btnBottom.addEventListener('click', function() {

    imgList[i].classList.remove('show');

    i++;

    imgList[i].classList.add('show');

    btnTop.classList.remove('hidden');

    if (i === imgList.length - 1)
    {
        btnBottom.classList.add('hidden');
    }

});

btnTop.addEventListener('click', function() {

    imgList[i].classList.remove('show');

    i--;

    imgList[i].classList.add('show');

    btnBottom.classList.remove('hidden');

    if (i === 0)
    {
        btnTop.classList.add('hidden');
    }

});


