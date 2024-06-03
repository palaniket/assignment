document.getElementById('ctu').addEventListener('click',function(){
    document.querySelector(".popup").classList.add('active');
});

document.querySelector('.popup .close-btn').addEventListener('click',function(){
    document.querySelector('.popup').classList.remove('active');
});

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   console.log(slides.length)
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" activeph", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " activeph";
// }





 
let slides = document.getElementsByClassName('image');
let dots = document.getElementsByClassName("dot");
  let slideIndex=0

  slides[0].classList.remove('remove')
  dots[0].classList.add('activeph')

  let prev=0;
  function plus(n){
     slideIndex+=n;
     showSlides(slideIndex)
  }
  function minus(n){
    slideIndex+=n;
    showSlides(slideIndex);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n){
    let slides = document.getElementsByClassName('image');
    
    // for (let index = 0; index < slides.length; index++) {
    //   slides[index].classList.add('remove')
      
    // }
    let dots = document.getElementsByClassName("dot");
    slides[prev].classList.add('remove')
    dots[prev].classList.remove('activeph')
    if(slideIndex>=slides.length){
      slideIndex=0;
    }
    if(slideIndex<0){
      slideIndex=slides.length-1;
    }
    console.log(slideIndex)
    slides[slideIndex].classList.remove('remove');
    dots[slideIndex].classList.add('activeph')
    prev=slideIndex;
    // slides[1].style.display = "block";
  }

  // console.log('Total number of slides:', slides.length);
  function length(){
    console.log(slides.length)
  }
  function openLink() {
    window.open('https://www.fylehq.com', '_blank');
}
const textBoxes = document.querySelectorAll('.text-box');

        // Select the img element inside the 'image-display' div
        const imageDisplay = document.querySelector('#image-display img');

        // Add a click event listener to each text box
        textBoxes.forEach(box => {
            box.addEventListener('click', function() {
                // Get the value of the 'data-image' attribute
                const imagePath = this.getAttribute('data-image');
                
                // Set the src attribute of the image element to the new image path
                imageDisplay.src = imagePath;
            });
        });